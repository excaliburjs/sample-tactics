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
        engine.input.pointers.on('down', this.pointerClick.bind(this));
        engine.input.pointers.on('move', this.pointerMove.bind(this));
    }

    reset() {
        this.resetHighlight();
        this.currentUnitSelection = null;
        this.currentPath = [];
        this.currentRange = [];
    }

    pointerMove(pointer: ex.PointerEvent) {
        if (!this.active) return;
        if (!this.currentUnitSelection) return;

        this.resetHighlight();
        const currentRange = this.findRange(this.currentUnitSelection);
        this.showHighlight(currentRange, 'range');

        const destination = this.board.getCellByWorldPos(pointer.worldPos);
        if (destination) {
            const currentPath = this.findPath(destination, this.currentRange);
            this.showHighlight(currentPath, 'path');
        }
    }

    selectUnit(unit: Unit) {
        this.currentUnitSelection = unit;
        this.currentRange = this.findRange(this.currentUnitSelection);
        this.showHighlight(this.currentRange, 'range');
    }

    async selectDestinationAndMove(unit: Unit, cell: Cell) {
        const range = this.findRange(unit);
        // select a destination if there is no path
        if (this.currentPath.length === 0) {
            this.currentPath = this.findPath(cell, range);
        }
        // if a valid path was found move!
        if (this.currentPath.length > 1) {

            this.active = false;
            await unit.move(this.currentPath);
            this.active = true;
        }
        this.reset();
    }

    async pointerClick(pointer: ex.PointerEvent) {
        if (!this.active) return;
        const maybeClickedCell = this.board.getCellByWorldPos(pointer.worldPos);

        // a unit is currently selected
        if (this.currentUnitSelection) {
            if (maybeClickedCell) {
                this.selectDestinationAndMove(this.currentUnitSelection, maybeClickedCell);
            } else {
                this.reset();
            }
        // no unit selected, make a selection
        } else {
            // check if the cell clicked has a unit
            if (maybeClickedCell?.unit) {
                this.selectUnit(maybeClickedCell.unit);
            // otherwise clear selection
            } else {
                this.reset();
            }
        }
    }

    findRange(unit: Unit): PathNodeComponent[] {
        if (!this.currentUnitSelection) return [];
        if (!unit.cell) return [];
        const range = this.board.pathFinder.getRange(unit.cell.pathNode, this.currentUnitSelection.unitConfig.range);
        return range;
    }

    resetHighlight() {
        this.board.cells.forEach(cell => {
            cell.toggleHighlight(false, 'range');
            cell.toggleHighlight(false, 'path');
        });
    }

    showHighlight(path: PathNodeComponent[], type: 'path' | 'range'): void {
        path.forEach(node => {
            const cell = node.owner as Cell;
            cell.toggleHighlight(true, type);
        });
    }

    findPath(destination: Cell, currentRange: PathNodeComponent[]): PathNodeComponent[] {
        if (!this.currentUnitSelection) return [];
        const start = this.currentUnitSelection.cell?.pathNode;

        if (destination && currentRange.includes(destination.pathNode)) {
            const path = this.board.pathFinder.findPath(start!, destination?.pathNode!, currentRange);
            return path;
        }
        return [];
    }
}