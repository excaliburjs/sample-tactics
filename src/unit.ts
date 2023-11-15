import * as ex from "excalibur";
import { Board } from "./board";
import { HeartSpriteSheet, Resources, SpiderSpriteSheet } from "./resources";
import { SCALE, UNIT_CONFIG, UnitConfig, UnitType } from "./config";

export class Unit extends ex.Actor {
    unitConfig: UnitConfig
    constructor(x: number, y: number, unitType: UnitType, board: Board)  {
        super({
            anchor: ex.vec(0, 0)
        });
        this.unitConfig = {...UNIT_CONFIG[unitType]};

        // TODO animation from config
        const anim = ex.Animation.fromSpriteSheetCoordinates({
            spriteSheet: SpiderSpriteSheet,
            strategy: ex.AnimationStrategy.Loop,
            frameCoordinates: [
                {x: 0, y: 0, duration: 200},
                {x: 1, y: 0, duration: 200},
                {x: 2, y: 0, duration: 200},
                {x: 3, y: 0, duration: 200}
            ]
        })
        anim.scale = SCALE;
        this.graphics.use(anim);
        this.graphics.onPostDraw = this.onPostDraw.bind(this);

        const cell = board.getCell(x, y);
        if (cell) {
            this.pos = cell.pos.sub(ex.vec(0, 8 * SCALE.y));
        }
    }

    onPostDraw(ctx: ex.ExcaliburGraphicsContext) {
        const heart = HeartSpriteSheet.getSprite(ex.clamp(this.unitConfig.health, 0, 5), 0);
        if (heart) {
            heart.scale = SCALE;
            heart.draw(ctx, 10 * SCALE.x, 16 * SCALE.y);
        }
    }
}