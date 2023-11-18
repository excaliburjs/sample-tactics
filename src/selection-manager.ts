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

    pointerclick(pointer: ex.PointerEvent) {
        if (!this.active) return;
        if (this.currentUnitSelection) {
            this.currentUnitSelection.move(this.currentPath);

            this.resetHighlight();
            this.currentUnitSelection = null;
        } else {
            const cell = this.board.getCellByWorldPos(pointer.worldPos);
            if (cell?.unit) {
                this.currentUnitSelection = cell.unit;
    
                // TODO unit controlled?
                this.showRange(this.currentUnitSelection);
            }
        }
    }

    showRange(unit: Unit) {
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

    pointermove(pointer: ex.PointerEvent) {
        if (!this.active) return;
        if (!this.currentUnitSelection) return;
        const start = this.currentUnitSelection.cell?.pathNode;
        const pointerCell = this.board.getCellByWorldPos(pointer.worldPos);

        this.resetHighlight();
        this.showRange(this.currentUnitSelection);

        if (pointerCell && this.currentRange.includes(pointerCell.pathNode)) {
            // todo limit path by range
            const path = this.board.pathFinder.findPath(start!, pointerCell?.pathNode!);
            path.forEach(node => {
                const cell = node.owner as Cell;
                cell.toggleHighlight(true, 'path', ex.Color.Green);
            });
            this.currentPath = path;
        }
    }
}