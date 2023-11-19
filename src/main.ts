import * as ex from 'excalibur';
import { loader } from './resources';
import { Cloud } from './cloud';
import { Cell } from './cell';
import { Board } from './board';
import { PathFinder } from './path-finding/path-finding-system';
import { PathNodeComponent } from './path-finding/path-node-component';
import { Unit } from './unit';
import { SelectionManager } from './selection-manager';

const game = new ex.Engine({
    width: 800,
    height: 800,
    displayMode: ex.DisplayMode.FitScreenAndFill
});

// TODO move to level

// Add clouds :3
game.add(new Cloud(ex.vec(800, 0)));
game.add(new Cloud(ex.vec(400, 300)));
game.add(new Cloud(ex.vec(700, 700)));

const board = new Board(6, 6, game.currentScene);

const selectionManager = new SelectionManager(game, board);

const spider1 = new Unit(0, 0, "Spider", board);
game.add(spider1);
const spider2 = new Unit(4, 5, "Spider", board);
game.add(spider2);

const knight1 = new Unit(1, 1, "Knight", board);
game.add(knight1);
const knight2 = new Unit(2, 1, "Knight", board);
game.add(knight2);

game.start(loader).then(() => {
    
});