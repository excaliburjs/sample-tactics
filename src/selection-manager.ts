import * as ex from 'excalibur';
import { Unit } from "./unit";
import { Board } from "./board";
import { Cell } from './cell';
import { PathNodeComponent } from './path-finding/path-node-component';
import { Player } from './player';


/**
 * Manages current unit selection
 */
export class SelectionManager {

    currentPlayer: Player | null = null;
    currentUnitSelection: Unit | null = null;
    currentRange: PathNodeComponent[] = [];
    currentPath: PathNodeComponent[] = [];

    constructor(private board: Board) {}

    reset() {
        this.resetHighlight();
        this.currentUnitSelection = null;
        this.currentPath = [];
        this.currentRange = [];
    }

    selectPlayer(player: Player) {
        this.currentPlayer = player;
    }

    selectUnit(unit: Unit) {
        if (unit.player !== this.currentPlayer) return;
        this.currentUnitSelection = unit;
        this.currentRange = this.findRange(this.currentUnitSelection);
        this.showHighlight(this.currentRange, 'range');
    }

    async selectDestinationAndMove(unit: Unit, destination: Cell) {
        if (unit.player !== this.currentPlayer) return;
        const range = this.findRange(unit);
        // select a destination if there is no path
        if (this.currentPath.length === 0) {
            this.currentPath = this.findPath(destination, range);
        }
        // if a valid path was found move!
        if (this.currentPath.length > 1) {
            await unit.move(this.currentPath);
        }
        this.reset();
    }


    findRange(unit: Unit): PathNodeComponent[] {
        if (!this.currentUnitSelection) return [];
        if (!unit.cell) return [];
        let range = this.board.pathFinder.getRange(unit.cell.pathNode, unit.player.mask, this.currentUnitSelection.unitConfig.range);
        range = range.filter(node => node.isWalkable && !!(node.walkableMask & unit.player.mask))
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

        if (destination && !destination.unit && currentRange.includes(destination.pathNode)) {
            const path = this.board.pathFinder.findPath(start!, destination?.pathNode!, this.currentUnitSelection.player.mask, currentRange);
            return path;
        }
        return [];
    }
}