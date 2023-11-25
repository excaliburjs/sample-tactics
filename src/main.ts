import * as ex from 'excalibur';
import { loader } from './resources';
import { LevelBase, LevelData } from './levels/level-base';
import { StartScreen } from './levels/start-screen';
import { Tutorial } from './levels/tutorial';
import './ui-components/audio-menu';
import { AudioManager } from './audio-manager';

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

AudioManager.init();

const startScreen = new StartScreen();
game.addScene('start', startScreen);

const tutorial = new Tutorial();
game.addScene(tutorial.name, tutorial);


const Level1Data: LevelData = {
    displayName: 'Gentle Plains',
    name: 'level1',
    nextLevel: 'level2',
    width: 6,
    height: 3,
    maxTurns: 10,
    players: ['human', 'computer'],
    data: [
        'GK1', 'G', 'G', 'GS2', 'G', 'GS2',
        'GK1', 'G', 'GS2', 'G', 'G', 'GS2',
        'G', 'G', 'W', 'W', 'G', 'G',
    ]
}

const level1 = new LevelBase(Level1Data, 'level1')
game.addScene(level1.name, level1);

export const Level2Data: LevelData = {
    displayName: 'Gentle Plains 2',
    name: 'level2',
    nextLevel: 'start',
    width: 6,
    height: 6,
    maxTurns: 100,
    players: ['human', 'computer'],
    data: [
        'GK1', 'G', 'GS2', 'G', 'G', 'GS2',
        'GK1', 'G', 'G', 'G', 'G', 'GS2',
        'GK1', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'G', 'GS2', 'W', 'W', 'GS2', 'GS2',
    ]
}

const level2 = new LevelBase(Level2Data, 'level2')
game.addScene(level2.name, level2);

game.start(loader).then(() => {
    game.goToScene('start');
});