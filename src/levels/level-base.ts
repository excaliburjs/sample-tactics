import * as ex from 'excalibur';
import { Board } from '../board';
import { Terrain } from '../cell';
import { SCALE, UnitType } from '../config';
import { Unit } from '../unit';
import { Player } from '../player';
import { HumanPlayer } from '../human-player';
import { SelectionManager } from '../selection-manager';
import { UIManager } from '../ui-manager';
import { TurnManager } from '../turn-manager';
import { ComputerPlayer } from '../computer-player';
import { Cloud } from '../cloud';
import { DustParticles } from '../dust-particles';
import { Resources } from '../resources';

export interface LevelData {
    name: string;
    displayName: string;
    nextLevel: string;
    width: number;
    height: number;
    maxTurns: number;
    /**
     * By convention the first player is human
     */
    players: string[];
    data: string[];
}

// export const TestLevelData: LevelData = {
//     name: 'Gentle Plains',
//     nextLevel: 'level2',
//     width: 6,
//     height: 6,
//     maxTurns: 100,
//     players: ['human', 'computer'],
//     data: [
//         'GK1', 'G', 'G', 'G', 'G', 'GK1',
//         'G', 'G', 'G', 'G', 'G', 'G',
//         'G', 'G', 'W', 'W', 'G', 'G',
//         'G', 'G', 'W', 'W', 'G', 'G',
//         'G', 'G', 'W', 'W', 'G', 'G',
//         'GS2', 'GS2', 'GS2', 'GS2', 'GS2', 'GS2'
//     ]
// }

export const CharToUnit = {
    K: 'Knight',
    S: 'Spider',
    M: 'Slime',
    C: 'Crab'
} as const;

export class LevelBase extends ex.Scene {

    board!: Board;
    selectionManager!: SelectionManager;
    uiManager!: UIManager;
    engine!: ex.Engine;
    players!: Player[];
    turnManager!: TurnManager;
    levelName!: ex.Actor;
    constructor(public levelData: LevelData, public name: string) {
        super();
    }

    override onInitialize(engine: ex.Engine): void {
        this.engine = engine;
        this.input.keyboard.on('press', (evt) => {
            // DELETEME for debugging
            if (evt.key === ex.Keys.W) {
                (this.players[1] as ComputerPlayer).lose();
            }
            if (evt.key === ex.Keys.L) {
                (this.players[0] as HumanPlayer).lose();
            }
        });
        // Add entities to resetAndLoad()!
    }

    async showLevelName() {
        const transitionTime = 1500;
        await this.levelName.actions.easeTo(ex.vec(600, 50), transitionTime, ex.EasingFunctions.EaseInOutCubic).toPromise();
    }

    resetAndLoad() {
        const entities = this.entities;
        for (let i = entities.length - 1; i >= 0; i--) {
            this.world.remove(entities[i], false);
        }

        Resources.LevelMusic2.stop();

        this.add(new Cloud(ex.vec(800, 0)));
        this.add(new Cloud(ex.vec(400, 300)));
        this.add(new Cloud(ex.vec(700, 700)));


        this.board = this.parse(this.levelData);

        this.add(DustParticles);

        this.camera.pos = this.board.getCenter();

        const levelName = new ex.Text({
            text: this.levelData.displayName,
            font: new ex.Font({
                family: 'notjamslab14',
                size: 16,
                unit: ex.FontUnit.Px,
                color: ex.Color.White,
                baseAlign: ex.BaseAlign.Top,
                quality: 2
            }),
        });
        levelName.scale = SCALE;

        this.levelName = new ex.Actor({
            name: 'level',
            pos: ex.vec(2000, 50),
            coordPlane: ex.CoordPlane.Screen,
            z: 10
        });
        this.levelName.graphics.add('text', levelName);
        this.levelName.graphics.use('text')
        // cyan background using child actor
        this.levelName.addChild(new ex.Actor({
            color: new ex.Color(50, 240, 50, .4),
            width: 400,
            height: 100,
        }));
        this.add(this.levelName);
    }

    private _subscriptions: ex.Subscription[] = [];
    override onActivate() {
        this.resetAndLoad();
        this.turnManager.start();
        this.showLevelName();
        Resources.LevelMusic2.loop = true;
        Resources.LevelMusic2.play();
    }

    override onDeactivate(): void {
        // TODO deactivate event handlers on types that have them!!
        Resources.LevelMusic2.instances.forEach(i => i.stop());
        Resources.LevelMusic2.stop();
        this._subscriptions.forEach(s => s.close());
    }

    parse(levelData: LevelData): Board {
        const board = new Board(levelData.height, levelData.width, this);
        this.selectionManager = new SelectionManager(board);
        this.selectionManager.showCursor(0, 0);
        this.uiManager = new UIManager(this.engine);
        // TODO support arbitrary players
        this.players = [
            new HumanPlayer(levelData.players[0], this.engine, this.selectionManager, this.uiManager, board),
            new ComputerPlayer(levelData.players[1], this.selectionManager, board)
        ];

        this.turnManager = new TurnManager(this.engine, this, this.players, this.selectionManager, 10);

        for (let y = 0; y < levelData.height; y++) {
            for (let x = 0; x < levelData.width; x++) {
                const data = levelData.data[x + y * levelData.width];
                const terrain = data.charAt(0) as Terrain;
                let unit: Unit | null = null;
                if (data.length === 3) {
                    const unitType: UnitType = CharToUnit[data.charAt(1) as 'K' | 'S' | 'M' | 'C']
                    const playerIndex = (+data.charAt(2)) - 1;

                    unit = new Unit(x, y, unitType, board, this.players[playerIndex]);
                    this.add(unit);
                }
                const cell = board.getCell(x, y);
                if (cell) {
                    cell.terrain = terrain;
                    if (unit) {
                        cell.addUnit(unit);
                    }
                }
            }
        }

        return board;
    }
}