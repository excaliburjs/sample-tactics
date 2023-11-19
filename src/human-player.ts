import { Board } from "./board";
import { Player } from "./player";
import { SelectionManager } from "./selection-manager";


export class HumanPlayer extends Player {
    constructor(name: string, private selectionManager: SelectionManager, private board: Board) {
        super(name);
    }
    // TODO event handlers need to be here
    override async makeMove(): Promise<boolean> {
        const units = this.board.getUnits().filter(u => u.player === this);

        for (let unit of units) {
            await this.selectionManager.waitForHumanMove();
        }
        return true;
    }
}