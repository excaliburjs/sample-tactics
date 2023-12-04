import * as ex from "excalibur";
import { Board } from "./board";
import { Player } from "./player";
import { SelectionManager } from "./selection-manager";
import { UIManager } from "./ui-manager";
import { Cell } from "./cell";
import { Unit } from "./unit";
import { Resources } from "./resources";


export class HumanPlayer extends Player {
    public passed = false;
    private humanMove = new ex.Future<void>();

    constructor(name: string, private engine: ex.Engine, private selectionManager: SelectionManager, public uiManger: UIManager, board: Board) {
        super(name, board);
        engine.input.pointers.on('down', this.pointerClick.bind(this));
        engine.input.pointers.on('move', this.pointerMove.bind(this));
        engine.input.keyboard.on('press', this.keyboardDown.bind(this));
        document.body.oncontextmenu = () => false;
    }

    keyboardDown(event: ex.KeyEvent) {
        if (!this.active) return;
        this.selectionManager.resetHighlight();
        const currentCursor = this.selectionManager.currentCursor;
        switch(event.key) {
            case ex.Keys.ArrowRight:
            case ex.Keys.D:
                this.selectionManager.showCursor(currentCursor.x + 1, currentCursor.y);
                break;
            case ex.Keys.Left:
            case ex.Keys.A:
                this.selectionManager.showCursor(currentCursor.x - 1, currentCursor.y);
                break;
            case ex.Keys.Up:
            case ex.Keys.W:
                this.selectionManager.showCursor(currentCursor.x, currentCursor.y - 1);
                break;
            case ex.Keys.Down:
            case ex.Keys.D:
                this.selectionManager.showCursor(currentCursor.x, currentCursor.y + 1);
                break;
            case ex.Keys.Enter:
            case ex.Keys.NumpadEnter:
                const cell = this.board.getCell(currentCursor.x, currentCursor.y);
                this.maybeSelectUnit(cell);
        }
    }

    async pointerClick(pointer: ex.PointerEvent) {
        if (!this.active) return;
        this.selectionManager.resetHighlight();
        const maybeClickedCell = this.board.getCellByWorldPos(pointer.worldPos);

        if (pointer.button === ex.PointerButton.Left) {
            // a unit is currently selected
            if (this.selectionManager.currentUnitSelection) {
                const unit = this.selectionManager.currentUnitSelection;
                if (this.selectionManager.currentSelectionMode === 'move') {
                    await this.maybeMove(unit, maybeClickedCell);
                    await this.maybeSelectUnit(unit.cell);
                } else {
                    await this.maybeAttack(unit, maybeClickedCell);
                    if (!this.hasWon()) {
                        await this.maybeSelectUnit(unit.cell);
                    }
                }
            // no unit selected, make a selection
            } else {
                this.maybeSelectUnit(maybeClickedCell);
            }
        }

        if (pointer.button === ex.PointerButton.Right) {
            this.highlightUnitRange(maybeClickedCell);
        }
    }

    pointerMove(pointer: ex.PointerEvent) {
        if (!this.active) return;

        const cellBelowPointer = this.board.getCellByWorldPos(pointer.worldPos);
        if (cellBelowPointer) {
            this.selectionManager.showCursor(cellBelowPointer.x, cellBelowPointer.y);
        }

        if (!this.selectionManager.currentUnitSelection) return;

        this.selectionManager.resetHighlight();

        // move
        if (this.selectionManager.currentSelectionMode === 'move') {
            const currentRange = this.selectionManager.findMovementRange(this.selectionManager.currentUnitSelection);
            this.selectionManager.showHighlight(currentRange, 'range');

            const destination = this.board.getCellByWorldPos(pointer.worldPos);
            if (destination) {
                const currentPath = this.selectionManager.findPath(destination, currentRange);
                this.selectionManager.showHighlight(currentPath, 'path');
            }
        // attack
        } else {
            const currentRange = this.selectionManager.findAttackRange(this.selectionManager.currentUnitSelection);
            this.selectionManager.showHighlight(currentRange, 'attack');

            const destination = this.board.getCellByWorldPos(pointer.worldPos);
            if (destination && this.hasNonPlayerUnit(destination)) {
                this.selectionManager.showHighlight([destination.pathNode], "path");
            }
        }
    }

    async maybeMove(unit: Unit, destination: Cell | null) {
        if (destination && unit.canMove()) {
            this.active = false;
            Resources.TargetSelectSound.play();
            await this.selectionManager.selectDestinationAndMove(unit, destination);
            this.humanMove.resolve();
        } else {
            this.selectionManager.reset();
        }
    }

    async maybeAttack(attacker: Unit, destination: Cell | null) {
        if (destination && attacker.canAttack() && this.hasNonPlayerUnit(destination)) {
            this.active = false;
            const enemyUnit = destination.unit as Unit;
            this.selectionManager.reset();
            await attacker.attack(enemyUnit);
            this.humanMove.resolve();
        } else {
            this.selectionManager.reset();
        }

        if (this.hasWon()) {
            this.humanMove.resolve();
            this.uiManger.dismissAll();
        }
    }

    /**
     * Highlight the range of any unit friendly or not
     * @param cell 
     */
    async highlightUnitRange(cell: Cell | null) {
        if (cell?.unit) {
            const unit = cell.unit;
            const rangePlusAttack = this.board.pathFinder.getRange(
                cell.pathNode,
                unit.player.mask,
                unit.unitConfig.movement + 1);
            this.selectionManager.showHighlight(rangePlusAttack, 'attack');

            const attack = this.board.pathFinder.getRange(
                cell.pathNode,
                ~unit.player.mask, // don't attack friends!
                unit.unitConfig.range);
            this.selectionManager.showHighlight(attack, 'attack');

            const currentRange = this.selectionManager.findMovementRange(unit);
            this.selectionManager.showHighlight(currentRange, 'range');
        } else {
            this.selectionManager.reset();
        }
    }

    async maybeSelectUnit(cell: Cell | null) {
         // check if the cell clicked has a unit, then select it
         if (cell?.unit && this.hasPlayerUnitWithActions(cell)) {
            Resources.SelectSound.play();

            this.uiManger.showUnitMenu(cell.unit, {
                move: () => {
                    this.selectionManager.selectUnit(cell.unit!, 'move');
                },
                attack: () => {
                    this.selectionManager.selectUnit(cell.unit!, 'attack');
                },
                pass: () => {
                    cell.unit?.pass();
                    this.selectionManager.reset();
                    this.humanMove.resolve();
                }
            });
        // otherwise clear selection
        } else {
            this.selectionManager.reset();
        }
    }

    hasNonPlayerUnit(maybeClickedCell: Cell) {
        return maybeClickedCell && maybeClickedCell.unit && maybeClickedCell.unit.player !== this;
    }

    hasPlayerUnitWithActions(maybeClickedCell: Cell) {
        return maybeClickedCell?.unit && maybeClickedCell?.unit?.hasActions() && maybeClickedCell.unit.player === this;
    }

    async waitForHumanMove() {
        this.active = true;
        await this.humanMove.promise;
        this.humanMove = new ex.Future();

    }

    hasMoves() {
        const units = this.board.getUnits()
            .filter(u => u.player === this)
            .filter(u => u.hasActions());
        return units.length > 0 && !this.passed && !this.hasWon();
    }

    override async makeMove(): Promise<boolean> {
        while(this.hasMoves()) {
            await this.waitForHumanMove();
        }
        return true;
    }

    lose() {
        this.active = false;
        const playerUnits = this.board.getUnits().filter(u => u.player instanceof HumanPlayer);
        playerUnits.forEach(u => { 
            u.health = 0
            u.cell?.removeUnit(u);
        });
        this.humanMove.resolve();
    }
}