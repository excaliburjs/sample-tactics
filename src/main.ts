import * as ex from 'excalibur';
import { loader } from './resources';
import { LevelBase, TestLevelData } from './levels/level-base';
import { StartScreen } from './levels/start-screen';

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

const startScreen = new StartScreen();
game.addScene('start', startScreen);

const level = new LevelBase(TestLevelData)
game.addScene('level1', level);

game.start(loader).then(() => {
    game.goToScene('start');
});