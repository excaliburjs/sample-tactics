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

const pathfinder = new PathFinder(game.currentScene);

const unit = new Unit(0, 0, "Spider", board);
game.add(unit);
const unit3 = new Unit(4, 5, "Spider", board);
game.add(unit3);

const unit2 = new Unit(1, 1, "Knight", board);
game.add(unit2);

game.onInitialize = () => {
    // const cell = board.getCell(2, 2);
    // const start = cell?.get(PathNodeComponent);
    // const range = pathfinder.getRange(start!, 3)
    // // console.log(range);

    // // range.forEach(cell => {
    // //     const graphics = cell.owner?.get(ex.GraphicsComponent);
    // //     if (graphics) {
    // //         graphics.current[0].graphic.tint = ex.Color.Blue;
    // //     }
    // // })

    // game.input.pointers.on('move', pointer => {
    //     const cell = board.getCellByWorldPos(pointer.worldPos);
    //     board.cells.forEach(node => {
    //         node.toggleHighlight(false);
    //     });
    //     if (cell) {
    //         const path = pathfinder.findPath(start!, cell?.pathNode!);
    //         path.forEach(node => {
    //             const cell = node.owner as Cell;
    //             cell.toggleHighlight(true, ex.Color.Green);
    //         })
    //     }
    // })

    
}

game.start(loader).then(() => {
    
});