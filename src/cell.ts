import * as ex from "excalibur";
import {Board} from "./board";
import {HighlightSpriteSheet, Resources, TerrainSpriteSheet} from "./resources";
import {SCALE} from "./config";
import {PathNodeComponent} from "./path-finding/path-node-component";
import {Unit} from "./unit";

const RangeHighlight = HighlightSpriteSheet.sprites[0].clone();
const PathHighlight = HighlightSpriteSheet.sprites[1].clone();
const AttackHighlight = HighlightSpriteSheet.sprites[2].clone();

export enum Terrain {
    Grass = 'G',
    Water = 'W',
    Sand = 'S',
    Stone = 'T'
}

export class Cell extends ex.Actor {
    decoration: ex.Actor;
    cursor: ex.Actor;
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

        this.cursor = new ex.Actor({
            pos: ex.vec(board.tileWidth / 2, board.tileHeight / 2 - 1).scale(SCALE),
        });
        this.addChild(this.cursor);

        this.pathNode = new PathNodeComponent(this.pos);
        this.addComponent(this.pathNode);

        this.terrain = Terrain.Grass;
        this.graphics.offset = ex.vec(0, -16);

        RangeHighlight.scale = SCALE;
        PathHighlight.scale = SCALE;
        AttackHighlight.scale = SCALE;

        this.decoration.graphics.add('range', RangeHighlight);
        this.decoration.graphics.add('path', PathHighlight);
        this.decoration.graphics.add('attack', AttackHighlight);
        this.decoration.actions.repeatForever((ctx) => {
            ctx.fade(0.4, 700).delay(300).fade(0.6, 700).delay(300)
        })

        this.cursor.actions.repeatForever((ctx) => {
            ctx.scaleTo(ex.vec(1.05, 1.05), ex.vec(0.75, 0.75))
                .delay(200)
                .scaleTo(ex.vec(1, 1), ex.vec(0.75, 0.75))
                .delay(200)
        })
        const myNineSlice = new ex.NineSlice({
            width: board.tileWidth + 4, height: board.tileHeight + 5,
            source: Resources.SelectionSprite,
            sourceConfig: {
                width: 16,
                height: 16,
                leftMargin: 7, rightMargin: 7,
                topMargin: 7, bottomMargin: 7,
            },
            destinationConfig: {
                drawCenter: false,
                horizontalStretch: ex.NineSliceStretch.Stretch,
                verticalStretch: ex.NineSliceStretch.Stretch
            }
        });
        this.cursor.graphics.add("cursor", myNineSlice);
        myNineSlice.scale = SCALE;
    }

    get terrain() {
        return this._terrain;
    }

    set terrain(terrain: Terrain) {
        this._terrain = terrain;
        switch (this.terrain) {
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
                this.sprite = TerrainSpriteSheet.sprites[ex.randomIntInRange(4, 5)];
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
            this.cursor.graphics.use("cursor");
        } else {
            this.cursor.graphics.hide();
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