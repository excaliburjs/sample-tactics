import * as ex from 'excalibur';

import { Player } from "./player";
import { SelectionManager } from "./selection-manager";
import { Board } from './board';
import { RANDOM } from './config';
import { PathNodeComponent } from './path-finding/path-node-component';
import { Cell } from './cell';

export class ComputerPlayer extends Player {
    public active: boolean = false;
    constructor(name: string, private selectionManger: SelectionManager, board: Board) {
        super(name, board);
    }

    override async turnStart(): Promise<void> {
        this.active = true;
    }
    override async turnEnd(): Promise<void> {
        this.active = false;
    }

    override async makeMove(): Promise<boolean> {
        const units = this.board.getUnits().filter(u => u.player === this);

        for (let unit of units) {
            await ex.Util.delay(1000);
            // pick a random valid move
            let range: PathNodeComponent[] = [];
            if (unit.cell) {
                range = this.board.pathFinder.getRange(unit.cell.pathNode, this.mask, unit.unitConfig.movement);
            }
            const node = RANDOM.pickOne(range);
            const cell = node.owner as Cell;
    
            this.selectionManger.selectUnit(unit, 'move');
            await ex.Util.delay(1000);
    
            const currentPath = this.selectionManger.findPath(cell, range);
            this.selectionManger.showHighlight(currentPath, 'path')
            await ex.Util.delay(1000);
    
            await this.selectionManger.selectDestinationAndMove(unit, cell);
            await ex.Util.delay(1000);
        }

        return true;
    }
}