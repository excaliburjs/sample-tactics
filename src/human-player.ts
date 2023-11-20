import * as ex from "excalibur";
import { Board } from "./board";
import { Player } from "./player";
import { SelectionManager } from "./selection-manager";
import { UIManager } from "./ui-manager";


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
        const currentRange = this.selectionManager.findRange(this.selectionManager.currentUnitSelection);
        this.selectionManager.showHighlight(currentRange, 'range');

        const destination = this.board.getCellByWorldPos(pointer.worldPos);
        if (destination) {
            const currentPath = this.selectionManager.findPath(destination, currentRange);
            this.selectionManager.showHighlight(currentPath, 'path');
        }
    }

    async pointerClick(pointer: ex.PointerEvent) {
        if (!this.active) return;
        const maybeClickedCell = this.board.getCellByWorldPos(pointer.worldPos);

        // a unit is currently selected
        if (this.selectionManager.currentUnitSelection) {
            if (maybeClickedCell) {
                this.active = false;
                await this.selectionManager.selectDestinationAndMove(this.selectionManager.currentUnitSelection, maybeClickedCell);
                this.humanMove.resolve();
            } else {
                this.selectionManager.reset();
            }
        // no unit selected, make a selection
        } else {
            // check if the cell clicked has a unit
            if (maybeClickedCell?.unit && maybeClickedCell?.unit?.canMove()) {
                this.uiManger.showUnitMenu(maybeClickedCell.unit, {
                    move: () => {
                        this.selectionManager.selectUnit(maybeClickedCell.unit!, 'move');
                    },
                    attack: () => {},
                    pass: () => {
                        maybeClickedCell.unit?.pass();
                        this.selectionManager.reset();
                        this.humanMove.resolve();
                    }
                });
                // this.selectionManager.selectUnit(maybeClickedCell.unit);
            // otherwise clear selection
            } else {
                this.selectionManager.reset();
            }
        }
    }

    async waitForHumanMove() {
        this.active = true;
        await this.humanMove.promise;
        this.humanMove = new ex.Future();

    }

    hasMoves() {
        const units = this.board.getUnits()
            .filter(u => u.player === this)
            .filter(u => u.canMove());
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