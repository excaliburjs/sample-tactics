import * as ex from 'excalibur';
import {loader} from './resources';
import {LevelBase, LevelData} from './levels/level-base';
import {StartScreen} from './levels/start-screen';
import {Tutorial} from './levels/tutorial';
import './ui-components/audio-menu';
import {AudioManager} from './audio-manager';

const game = new ex.Engine({
    width: 800,
    height: 800,
    displayMode: ex.DisplayMode.FitScreenAndFill,
    pixelArt: true,
    pixelRatio: 2,
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
    nextLevel: 'level3',
    width: 6,
    height: 6,
    maxTurns: 100,
    players: ['human', 'computer'],
    data: [
        'GK1', 'G', 'GM2', 'G', 'G', 'GS2',
        'GK1', 'G', 'G', 'G', 'G', 'GS2',
        'GK1', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'GM2', 'GM2', 'W', 'W', 'GS2', 'GS2',
    ]
}

const level2 = new LevelBase(Level2Data, 'level2')
game.addScene(level2.name, level2);


export const Level3Data: LevelData = {
    displayName: 'Beach Danger',
    name: 'level3',
    nextLevel: 'start',
    width: 6,
    height: 6,
    maxTurns: 100,
    players: ['human', 'computer'],
    data: [
        'S', 'S', 'SM2', 'S', 'SK1', 'W',
        'SK1', 'S', 'S', 'SK1', 'W', 'W',
        'SK1', 'S', 'W', 'W', 'W', 'W',
        'S', 'S', 'S', 'W', 'W', 'W',
        'S', 'S', 'SM2', 'SC2', 'SC2', 'W',
        'S', 'SC2', 'S', 'SM2', 'SM2', 'W',
    ]
}

const level3 = new LevelBase(Level3Data, 'level3')
game.addScene(level3.name, level3);

game.start(loader).then(() => {
    game.screen.pixelRatioOverride = 4;
    game.screen.applyResolutionAndViewport();
    game.goToScene('start');
});
