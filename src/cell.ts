import * as ex from "excalibur";
import { Board } from "./board";
import { CursorAnimation, HighlightAnimation, RedHighlightAnimation, TerrainSpriteSheet } from "./resources";
import { BOARD_OFFSET, SCALE } from "./config";
import { PathNodeComponent } from "./path-finding/path-node-component";
import { Unit } from "./unit";

const RangeHighlightAnimation = HighlightAnimation.clone();
const PathHighlightAnimation = HighlightAnimation.clone();
const AttackHighlightAnimation = RedHighlightAnimation.clone();

export enum Terrain {
    Grass = 'G',
    Water = 'W',
    Sand  = 'S',
    Stone = 'T'
}

export class Cell extends ex.Actor {
    decoration: ex.Actor;
    sprite!: ex.Sprite;
    pathNode: PathNodeComponent;
    unit: Unit | null = null;
    private _terrain: Terrain = Terrain.Grass;

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
            ),
            anchor: ex.Vector.Zero
        });
        this.decoration = new ex.Actor({anchor: ex.vec(0, 0)});
        this.addChild(this.decoration);

        this.pathNode = new PathNodeComponent(this.pos);
        this.addComponent(this.pathNode);

        this.terrain = Terrain.Grass;

        RangeHighlightAnimation.scale = SCALE;
        RangeHighlightAnimation.opacity = 0.75;
        PathHighlightAnimation.scale = SCALE;
        PathHighlightAnimation.opacity = 0.75;
        PathHighlightAnimation.tint = ex.Color.Green;
        AttackHighlightAnimation.scale = SCALE;
        AttackHighlightAnimation.opacity = 0.75;
        CursorAnimation.scale = SCALE;
        this.decoration.graphics.add('range', RangeHighlightAnimation);
        this.decoration.graphics.add('path', PathHighlightAnimation);
        this.decoration.graphics.add('attack', AttackHighlightAnimation);
        this.decoration.graphics.add('cursor', CursorAnimation);
    }

    get terrain() {
        return this._terrain;
    }

    set terrain(terrain: Terrain) {
        this._terrain = terrain;
        switch(this.terrain) {
            case Terrain.Grass:
                this.sprite = TerrainSpriteSheet.sprites[ex.randomIntInRange(0, 1)];
                break;
            case Terrain.Sand:
                this.sprite = TerrainSpriteSheet.sprites[ex.randomIntInRange(2, 3)];
                // TODO slower to move through sand
                break;
            case Terrain.Water:
                this.sprite = TerrainSpriteSheet.sprites[4];
                this.pathNode.isWalkable = false;
                break;
            case Terrain.Stone:
                this.sprite = TerrainSpriteSheet.sprites[5];
                break;
        }
        this.sprite.scale = SCALE;
        this.graphics.use(this.sprite.clone());
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

    toggleHighlight(show: boolean, type: 'range' | 'path' | 'attack') {
        // reset highlight
        this.decoration.graphics.hide();

        if (show) {
            this.decoration.graphics.use(type);
        } else {
            this.decoration.graphics.hide();
        }
    }

    toggleCursor(show: boolean) {
        if (show) {
            this.decoration.graphics.use('cursor');
        } else {
            this.decoration.graphics.hide();
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