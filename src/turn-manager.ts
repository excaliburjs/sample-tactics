import * as ex from 'excalibur';
import { Player } from "./player";
import { SelectionManager } from "./selection-manager";
import { SCALE } from './config';

/**
 * Manages player turns, keeps track of which of the N number of players turn it is.
 * 
 * Requests moves from either human or AI players
 */
export class TurnManager {
    public currentTurn = 1;
    public currentPlayer: Player;
    private currentPlayerIndex = 0;
    public selectionManager: SelectionManager;
    private turnActor: ex.Actor;
    private turnText: ex.Text;
    private topScreen = ex.vec(400, -2000);
    private centerScreen = ex.vec(400, 400);
    private bottomScreen = ex.vec(400, 2000);

    constructor(public engine: ex.Engine, public players: Player[], selectionManager: SelectionManager, public maxTurns: number) {
        if (players.length === 0) throw Error('Players should be non-zero in length');
        this.currentPlayer = players[this.currentPlayerIndex];
        this.selectionManager = selectionManager;

        this.turnText = new ex.Text({
            text: `Turn ${this.currentTurn}`,
            font: new ex.Font({
                family: 'notjamslab14',
                size: 32 * SCALE.x,
                unit: ex.FontUnit.Px,
                color: ex.Color.White,
                baseAlign: ex.BaseAlign.Top,
                quality: 4
            }),
        });

        const screenWidth = engine.screen.resolution.width;

        this.turnActor = new ex.Actor({
            pos: this.topScreen,
            coordPlane: ex.CoordPlane.Screen,
            color: new ex.Color(240, 50, 50, .4),
            width: screenWidth,
            height: 100,
            z: 10
        });
        this.turnActor.graphics.opacity = 0;
        this.turnActor.graphics.add('text', this.turnText);
        this.turnActor.graphics.show('text')
        engine.add(this.turnActor);
    }

    async showTurnDisplay() {
        if (this.currentPlayerIndex !== 0) return;
        this.turnText.text = `Turn ${this.currentTurn}`
        const transitionTime = 1200;
        const waitTime = 700;
        await this.turnActor.actions.runAction(
            new ex.ParallelActions([
                new ex.ActionSequence(this.turnActor, ctx => 
                    ctx.easeTo(this.centerScreen, transitionTime, ex.EasingFunctions.EaseInOutCubic)
                       .delay(waitTime)
                       .easeTo(this.bottomScreen, transitionTime, ex.EasingFunctions.EaseInOutCubic)),
                new ex.ActionSequence(this.turnActor, ctx => 
                    ctx.fade(1, transitionTime)
                        .delay(waitTime)
                        .fade(0, transitionTime))
            ])
        ).toPromise();

        this.turnActor.pos = this.topScreen;
    }

    async start() {
        // TODO win condition
        while (this.maxTurns > 0) {
            console.log('Current player turn:', this.currentPlayer.name);
            this.selectionManager.selectPlayer(this.currentPlayer);
            this.showTurnDisplay();
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
        this.currentPlayerIndex = this.currentPlayerIndex % this.players.length;
        this.currentPlayer = this.players[this.currentPlayerIndex];
        if (this.currentPlayerIndex === 0) {
            this.currentTurn++;
        }
    }
}