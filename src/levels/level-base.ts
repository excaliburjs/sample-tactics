import * as ex from 'excalibur';
import { Board } from '../board';
import { Terrain } from '../cell';
import { UnitType } from '../config';
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
    width: number;
    height: number;
    maxTurns: number;
    /**
     * By convention the first player is human
     */
    players: string[];
    data: string[];
}

export const TestLevelData: LevelData = {
    name: 'Gentle Plains',
    width: 6,
    height: 6,
    maxTurns: 10,
    players: ['human', 'computer'],
    data: [
        'GK1', 'G', 'G', 'G', 'G', 'GK1',
        'G', 'G', 'G', 'G', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'GS2', 'GS2', 'GS2', 'GS2', 'GS2', 'GS2'
    ]
}

export class LevelBase extends ex.Scene {

    board!: Board;
    selectionManager!: SelectionManager;
    uiManager!: UIManager;
    engine!: ex.Engine;
    players!: Player[];
    turnManager!: TurnManager;
    constructor(public levelData: LevelData) {
        super();
    }

    override onInitialize(engine: ex.Engine): void {
        this.engine = engine;

        this.add(new Cloud(ex.vec(800, 0)));
        this.add(new Cloud(ex.vec(400, 300)));
        this.add(new Cloud(ex.vec(700, 700)));


        this.board = this.parse(this.levelData);

        this.add(DustParticles);
    }

    override onActivate(): void {
        this.turnManager.start();
        Resources.LevelMusic2.loop = true;
        Resources.LevelMusic2.volume = .05;
        Resources.LevelMusic2.play();

    }

    override onDeactivate(): void {
        // TODO deactivate event handlers on types that have them!!
        Resources.LevelMusic2.stop();
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

        this.turnManager = new TurnManager(this.engine, this.players, this.selectionManager, 10);

        for (let y = 0; y < levelData.height; y++) {
            for (let x = 0; x < levelData.width; x++) {
                const data = levelData.data[x + y * levelData.width];
                const terrain = data.charAt(0) as Terrain;
                let unit: Unit | null = null;
                if (data.length === 3) {
                    const unitType: UnitType = data.charAt(1) === 'K' ? 'Knight' : 'Spider';
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