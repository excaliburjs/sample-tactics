import * as ex from "excalibur";
import { Board } from "./board";
import { Player } from "./player";
import { SelectionManager } from "./selection-manager";
import { UIManager } from "./ui-manager";
import { Cell } from "./cell";
import { Unit } from "./unit";


export class HumanPlayer extends Player {
    public passed = false;
    private humanMove = new ex.Future<void>();

    constructor(name: string, private engine: ex.Engine, private selectionManager: SelectionManager, public uiManger: UIManager, board: Board) {
        super(name, board);
        engine.input.pointers.on('down', this.pointerClick.bind(this));
        engine.input.pointers.on('move', this.pointerMove.bind(this));
    }


    pointerMove(pointer: ex.PointerEvent) {
        if (!this.active) return;
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
    }


    async maybeSelectUnit(cell: Cell | null) {
         // check if the cell clicked has a unit, then select it
         if (cell?.unit && this.hasPlayerUnitWithActions(cell)) {
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

    async pointerClick(pointer: ex.PointerEvent) {
        if (!this.active) return;
        const maybeClickedCell = this.board.getCellByWorldPos(pointer.worldPos);
        // a unit is currently selected
        if (this.selectionManager.currentUnitSelection) {
            if (this.selectionManager.currentSelectionMode === 'move') {
                await this.maybeMove(this.selectionManager.currentUnitSelection, maybeClickedCell);
            } else {
                await this.maybeAttack(this.selectionManager.currentUnitSelection, maybeClickedCell);
            }
        // no unit selected, make a selection
        } else {
            this.maybeSelectUnit(maybeClickedCell);
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
        return units.length > 0 && !this.passed;
    }

    override async makeMove(): Promise<boolean> {
        const units = this.board.getUnits().filter(u => u.player === this);

        // TODO while there are moves to make or the player has not passed their turn wait
        while(this.hasMoves()) {
            await this.waitForHumanMove();
        }
        return true;
    }
}