import * as ex from "excalibur";
import { Board } from "./board";
import { HighlightAnimation, TerrainSpriteSheet } from "./resources";
import { BOARD_OFFSET, SCALE } from "./config";
import { PathNodeComponent } from "./path-finding/path-node-component";
import { Unit } from "./unit";

const RangeHighlightAnimation = HighlightAnimation.clone();
const PathHighlightAnimation = HighlightAnimation.clone();

export class Cell extends ex.Actor {
    sprite: ex.Sprite;
    pathNode: PathNodeComponent;
    unit: Unit | null = null;

    /**
     * Individual cells on the board
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
        RangeHighlightAnimation.scale = SCALE;
        PathHighlightAnimation.scale = SCALE;
        PathHighlightAnimation.tint = ex.Color.Green;
        this.graphics.add('range', RangeHighlightAnimation);
        this.graphics.add('path', PathHighlightAnimation);
    }

    addUnit(unit: Unit) {
        this.unit = unit;
        this.unit.cell = this;
        this.pathNode.walkableMask = unit.player.mask;
    }

    removeUnit(unit: Unit) {
        this.pathNode.walkableMask = -1;
        this.unit = null;
        unit.cell = null;
    }

    toggleHighlight(show: boolean, type: 'range' | 'path') {
        // reset highlight
        this.graphics.hide('range');
        this.graphics.hide('path');

        if (show) {
            this.graphics.show(type);
        } else {
            this.graphics.hide(type);
        }
    }

    getDistance(other: Cell) {
        return Math.abs(this.pos.x - other.pos.x) + Math.abs(this.pos.y - other.pos.y);
    }

    /**
     * Returns the orthogonal neighbors (up, down, left, right)
     * @returns 
     */
    getNeighbors(): Cell[] {
        return [
            this.board.getCell(this.x, this.y - 1),
            this.board.getCell(this.x, this.y + 1),
            this.board.getCell(this.x + 1, this.y),
            this.board.getCell(this.x - 1, this.y),
        ].filter(function (cell) {
            return cell !== null;
        }) as Cell[];
    }

}