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

    active: boolean = false;
    private humanMove = new ex.Future<void>();

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

    async pointerClick(pointer: ex.PointerEvent) {
        if (!this.active) return;
        const maybeClickedCell = this.board.getCellByWorldPos(pointer.worldPos);

        // a unit is currently selected
        if (this.currentUnitSelection) {
            if (maybeClickedCell) {
                await this.selectDestinationAndMove(this.currentUnitSelection, maybeClickedCell);
                this.humanMove.resolve();
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
            this.active = false;
            await unit.move(this.currentPath);
        }
        this.reset();
    }

    async waitForHumanMove() {
        this.active = true;
        await this.humanMove.promise;
        this.humanMove = new ex.Future();
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