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
    currentSelectionMode: 'move' | 'attack' = 'move';
    currentUnitSelection: Unit | null = null;
    currentRange: PathNodeComponent[] = [];
    currentPath: PathNodeComponent[] = [];

    currentCursor: {x: number, y: number } = {x: 0, y: 0};

    constructor(private board: Board) {}

    reset() {
        this.resetHighlight();
        this.currentUnitSelection = null;
        this.currentPath = [];
        this.currentRange = [];
    }

    showCursor(x: number, y: number) {
        const cell = this.board.getCell(x, y);
        if (cell) {
            this.board.cells.forEach(c => c.toggleCursor(false));
            cell.toggleCursor(true);
            this.currentCursor = { x, y };
        }
    }

    selectPlayer(player: Player) {
        this.currentPlayer = player;
    }

    selectUnit(unit: Unit, type: 'move' | 'attack') {
        if (unit.player !== this.currentPlayer) return;
        this.currentUnitSelection = unit;
        this.currentSelectionMode = type;
        if (type ===  'move') {
            this.currentRange = this.findMovementRange(this.currentUnitSelection);
            this.showHighlight(this.currentRange, 'range');
        } else {
            this.currentRange = this.findAttackRange(this.currentUnitSelection);
            this.showHighlight(this.currentRange, 'attack');
        }
    }

    async selectDestinationAndMove(unit: Unit, destination: Cell) {
        if (unit.player !== this.currentPlayer) return;
        const range = this.findMovementRange(unit);
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

    findAttackRange(unit: Unit): PathNodeComponent[] {
        if (!this.currentUnitSelection) return [];
        if (!unit.cell) return [];
        let range = this.board.pathFinder.getRange(
            unit.cell.pathNode,
            ~unit.player.mask, // don't attack friends!
            this.currentUnitSelection.unitConfig.range);
        return range;
    }

    findMovementRange(unit: Unit): PathNodeComponent[] {
        // if (!this.currentUnitSelection) return [];
        if (!unit.cell) return [];
        let range = this.board.pathFinder.getRange(
            unit.cell.pathNode,
            unit.player.mask,
            unit.unitConfig.movement);
        range = range.filter(node => node.isWalkable && !!(node.walkableMask & unit.player.mask))
        return range;
    }

    resetHighlight() {
        this.board.cells.forEach(cell => {
            cell.toggleHighlight(false, 'range');
            cell.toggleHighlight(false, 'path');
            cell.toggleHighlight(false, 'attack');
        });
    }

    showHighlight(path: PathNodeComponent[], type: 'path' | 'range' | 'attack'): void {
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