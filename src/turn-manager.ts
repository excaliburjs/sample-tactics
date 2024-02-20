import * as ex from 'excalibur';
import { Player } from "./player";
import { SelectionManager } from "./selection-manager";
import { SCALE } from './config';
import { HumanPlayer } from './human-player';
import { ComputerPlayer } from './computer-player';
import { Resources } from './resources';
import { LevelBase } from './levels/level-base';

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
    private victory: ex.Actor;
    private victoryDirections: ex.Actor;
    private failure: ex.Actor;

    constructor(public engine: ex.Engine, public level: LevelBase, public players: Player[], selectionManager: SelectionManager, public maxTurns: number) {
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
            name: 'turn text',
            pos: this.topScreen,
            coordPlane: ex.CoordPlane.Screen,
            z: 10
        });
        this.turnActor.graphics.opacity = 0;
        this.turnActor.graphics.add('text', this.turnText);
        this.turnActor.graphics.use('text')
        // background graphic
        this.turnActor.addChild(new ex.Actor({
            color: new ex.Color(240, 50, 50, .4),
            width: screenWidth,
            height: 100,
        }));
        engine.add(this.turnActor);

        const victory = new ex.Text({
            text: `Victory!`,
            font: new ex.Font({
                family: 'notjamslab14',
                size: 32 * SCALE.x,
                unit: ex.FontUnit.Px,
                color: ex.Color.White,
                baseAlign: ex.BaseAlign.Top,
                quality: 4
            }),
        });

        this.victory = new ex.Actor({
            name: 'victory text',
            pos: this.topScreen,
            coordPlane: ex.CoordPlane.Screen,
            color: new ex.Color(50, 240, 50, .4),
            width: screenWidth,
            height: 100,
            z: 10
        });
        this.victory.graphics.opacity = 0;
        this.victory.graphics.add('text', victory);
        this.victory.graphics.show('text')
        engine.add(this.victory);

        const victoryDirections = new ex.Text({
            text: `Click to proceed!`,
            font: new ex.Font({
                family: 'notjamslab14',
                size: 32 * SCALE.x,
                unit: ex.FontUnit.Px,
                color: ex.Color.White,
                baseAlign: ex.BaseAlign.Top,
                quality: 4
            }),
        });

        this.victoryDirections = new ex.Actor({
            name: 'directions',
            pos: this.topScreen,
            coordPlane: ex.CoordPlane.Screen,
            color: new ex.Color(50, 240, 50, .4),
            width: screenWidth,
            height: 100,
            z: 10
        });
        this.victoryDirections.graphics.opacity = 0;
        this.victoryDirections.graphics.add('text', victoryDirections);
        this.victoryDirections.graphics.show('text')
        engine.add(this.victoryDirections);

        const failureText1 = new ex.Text({
            text: `Failure!`,
            font: new ex.Font({
                family: 'notjamslab14',
                size: 32 * SCALE.x,
                unit: ex.FontUnit.Px,
                color: ex.Color.White,
                textAlign: ex.TextAlign.Center,
                baseAlign: ex.BaseAlign.Top,
                quality: 4
            }),
        });
        const failureText2 = new ex.Text({
            text: `Click to try again!`,
            font: new ex.Font({
                family: 'notjamslab14',
                size: 32 * SCALE.x,
                unit: ex.FontUnit.Px,
                color: ex.Color.White,
                textAlign: ex.TextAlign.Center,
                baseAlign: ex.BaseAlign.Top,
                quality: 4
            }),
        });
        const failureGroup = new ex.GraphicsGroup({
            members: [
                new ex.Rectangle({
                    width: screenWidth, height: 250, color: new ex.Color(240, 50, 50, .4)
                }),
                { graphic: failureText1, useBounds: false, offset: ex.vec(screenWidth/2, 0) },
                { graphic: failureText2, useBounds: false, offset: ex.vec(screenWidth/2, 100) },
            ]
        });

        this.failure = new ex.Actor({
            name: 'failure text',
            pos: this.topScreen,
            coordPlane: ex.CoordPlane.Screen,
            z: 10
        });
        this.failure.graphics.opacity = 0;
        this.failure.graphics.use(failureGroup);
        engine.add(this.failure);
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

    async showGameOver() {
        const transitionTime = 1200;
        await this.failure.actions.runAction(
            new ex.ParallelActions([
                new ex.ActionSequence(this.failure, ctx => 
                    ctx.easeTo(this.centerScreen, transitionTime, ex.EasingFunctions.EaseInOutCubic)),
                new ex.ActionSequence(this.failure, ctx => 
                    ctx.fade(1, transitionTime))
            ])
        ).toPromise();
    }
    async showVictory() {
        const transitionTime = 1200;
        await this.victory.actions.runAction(
            new ex.ParallelActions([
                new ex.ActionSequence(this.victory, ctx => 
                    ctx.easeTo(this.centerScreen, transitionTime, ex.EasingFunctions.EaseInOutCubic)),
                new ex.ActionSequence(this.victory, ctx => 
                    ctx.fade(1, transitionTime))
            ])
        ).toPromise();

        await this.victoryDirections.actions.runAction(
            new ex.ParallelActions([
                new ex.ActionSequence(this.victoryDirections, ctx => 
                    ctx.easeTo(this.centerScreen.add(ex.vec(0, 150)), transitionTime, ex.EasingFunctions.EaseInOutCubic)),
                new ex.ActionSequence(this.victoryDirections, ctx => 
                    ctx.fade(1, transitionTime))
            ])
        ).toPromise();
    }

    async checkWin(player: Player) {
        if (player.hasLost()) {
            console.log('Player lost!', player.name);
            if (player instanceof HumanPlayer) {
                await this.showGameOver();
                this.engine.input.pointers.once('down', () => {
                    Resources.LevelMusic2.stop();
                    this.engine.goToScene(this.level.levelData.name);
                });
                return true;
            }
            if (player instanceof ComputerPlayer) {
                await this.showVictory();
                this.engine.input.pointers.once('down', () => {
                    setTimeout(() => {
                        this.engine.goToScene(this.level.levelData.nextLevel);
                    });
                });
                return true;
            }
        }
        return false;
    }

    async start() {
        while (this.maxTurns > 0) {
            console.log('Current player turn:', this.currentPlayer.name);
            if (await this.checkWin(this.currentPlayer)) return;
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