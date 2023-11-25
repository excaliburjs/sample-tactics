import * as ex from "excalibur";
import { Resources } from "./resources";
import { SCALE } from "./config";

export class Cloud extends ex.Actor {
    cloudSprite!: ex.Sprite;
    constructor(pos: ex.Vector) {
        super({
            name: 'cloud',
            pos,
            vel: ex.vec(ex.randomInRange(-30, -100), 0),
            width: 100,
            height: 100
        });
    }
    override onInitialize(_engine: ex.Engine): void {
        this.cloudSprite = Resources.CloudSheet.toSprite();
        this.cloudSprite.scale = SCALE
        this.graphics.use(this.cloudSprite);

    }
    override onPostUpdate(engine: ex.Engine, _delta: number): void {
        if (this.pos.x + this.cloudSprite.width < 0) {
            this.pos.x = engine.screen.contentArea.right + this.cloudSprite.width;
        } 
    }
}