import * as ex from 'excalibur';
import { loader } from './resources';
import { Cloud } from './cloud';
import { Board } from './board';
import { Unit } from './unit';
import { SelectionManager } from './selection-manager';
import { TurnManager } from './turn-manager';
import { HumanPlayer } from './human-player';
import { ComputerPlayer } from './computer-player';
import { UIManager } from './ui-manager';
import { DustParticles } from './dust-particles';
import { LevelBase, TestLevelData } from './levels/level-base';

const game = new ex.Engine({
    width: 800,
    height: 800,
    displayMode: ex.DisplayMode.FitScreenAndFill,
    antialiasing: false,
    suppressHiDPIScaling: true,
    configurePerformanceCanvas2DFallback: {
        allow: false
    }
});

const level = new LevelBase(TestLevelData)
game.addScene('level1', level);

game.start(loader).then(() => {
    game.goToScene('level1');
});