import * as ex from "excalibur";
import { Board } from "./board";
import { TerrainSpriteSheet } from "./resources";
import { BOARD_OFFSET, SCALE } from "./config";
import { PathNodeComponent } from "./path-finding/path-node-component";

export class Cell extends ex.Actor {
    sprite: ex.Sprite;
    pathNode: PathNodeComponent;
    /**
     * 
     * @param x integer coordinate
     * @param y integer coordinate
     * @param board 
     */
    constructor(public x: number, public y: number, public board: Board) {
        super({
            name: `cell(${x}, ${y})`,
            pos: ex.vec(
                x * (board.tileWidth + board.margin) * SCALE.x,
                y * (board.tileHeight + board.margin) * SCALE.y
            ).add(BOARD_OFFSET),
            anchor: ex.Vector.Zero
        });
        this.pathNode = new PathNodeComponent(this.pos);
        this.addComponent(this.pathNode);

        this.sprite = TerrainSpriteSheet.sprites[ex.randomIntInRange(0, 5)];
        this.sprite.scale = SCALE;
        this.graphics.use(this.sprite.clone());
    }

    getDistance(other: Cell) {
        return Math.abs(this.pos.x - other.pos.x) + Math.abs(this.pos.y - other.pos.y);
    }

    getNeighbors(): Cell[] {
        return [
            this.board.getCell(this.x + 1, this.y),
            this.board.getCell(this.x, this.y + 1),
            this.board.getCell(this.x - 1, this.y),
            this.board.getCell(this.x, this.y - 1),
        ].filter(function (cell) {
            return cell !== null;
        }) as Cell[];
    }

}