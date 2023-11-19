import { Player } from "./player";
import { SelectionManager } from "./selection-manager";

/**
 * Manages player turns, keeps track of which of the N number of players turn it is.
 * 
 * Requests moves from either human or AI players
 */
export class TurnManager {
    public currentPlayer: Player;
    private currentPlayerIndex = 0;
    public selectionManager: SelectionManager;
    constructor(public players: Player[], selectionManager: SelectionManager, public maxTurns: number) {
        if (players.length === 0) throw Error('Players should be non-zero in length');
        this.currentPlayer = players[this.currentPlayerIndex];
        this.selectionManager = selectionManager;
    }

    // todo generator??
    async start() {
        while (this.maxTurns > 0) {
            console.log('Current player turn:', this.currentPlayer.name);
            this.selectionManager.selectPlayer(this.currentPlayer);
            await this.currentPlayer.turnStart();
            let move = true;
            do {
                move = await this.currentPlayer.makeMove();
            } while (!move);
            await this.currentPlayer.turnEnd();
            this.nextTurn();
            this.maxTurns--;
        }
    }
    
    nextTurn() {
        this.currentPlayerIndex++;
        this.currentPlayer = this.players[this.currentPlayerIndex % this.players.length];
    }
}