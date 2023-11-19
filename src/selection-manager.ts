import * as ex from 'excalibur';
import { Unit } from "./unit";
import { Board } from "./board";
import { Cell } from './cell';
import { PathNodeComponent } from './path-finding/path-node-component';


/**
 * Manages current unit selection
 */
export class SelectionManager {

    currentUnitSelection: Unit | null = null;
    currentRange: PathNodeComponent[] = [];
    currentPath: PathNodeComponent[] = [];

    active: boolean = true;

    constructor(private engine: ex.Engine, private board: Board) {
        engine.input.pointers.on('down', this.pointerclick.bind(this));
        engine.input.pointers.on('move', this.pointermove.bind(this));
    }

    reset() {
        this.resetHighlight();
        this.currentUnitSelection = null;
        this.currentPath = [];
        this.currentRange = [];
    }

    pointerclick(pointer: ex.PointerEvent) {
        if (!this.active) return;
        if (this.currentUnitSelection) {
            if (this.currentPath.length === 0) {
                this.showAndFindPath(pointer.worldPos);
            }
            if (this.currentPath.length > 1 ) {
                this.currentUnitSelection.move(this.currentPath).then(() => {
                    this.reset();
                });
                
                this.resetHighlight();
                this.currentUnitSelection = null;
            }
            this.reset();
        } else {
            // no unit selected
            const cell = this.board.getCellByWorldPos(pointer.worldPos);
            if (cell?.unit) {
                this.currentUnitSelection = cell.unit;
                this.showAndFindRange(this.currentUnitSelection);
            } else {
                this.reset();
            }
        }
    }

    showAndFindRange(unit: Unit) {
        if (!this.currentUnitSelection) return;
        if (!unit.cell) return;
        const range = this.board.pathFinder.getRange(unit.cell.pathNode, this.currentUnitSelection.unitConfig.range);
        range.forEach(node => {
            const cell = node.owner as Cell;
            cell.toggleHighlight(true, 'range');
        });
        this.currentRange = range;
    }

    resetHighlight() {
        this.board.cells.forEach(cell => {
            cell.toggleHighlight(false, 'range');
            cell.toggleHighlight(false, 'path');
        });
    }

    showAndFindPath(pos: ex.Vector) {
        if (!this.currentUnitSelection) return;
        const start = this.currentUnitSelection.cell?.pathNode;
        const pointerCell = this.board.getCellByWorldPos(pos);

        this.resetHighlight();
        this.showAndFindRange(this.currentUnitSelection);

        if (pointerCell && this.currentRange.includes(pointerCell.pathNode)) {
            // todo limit path by range
            const path = this.board.pathFinder.findPath(start!, pointerCell?.pathNode!, this.currentRange);
            path.forEach(node => {
                const cell = node.owner as Cell;
                cell.toggleHighlight(true, 'path', ex.Color.Green);
            });
            this.currentPath = path;
        }
    }

    pointermove(pointer: ex.PointerEvent) {
        if (!this.active) return;
        if (!this.currentUnitSelection) return;

        this.resetHighlight();
        this.showAndFindRange(this.currentUnitSelection);
        this.showAndFindPath(pointer.worldPos);
    }
}