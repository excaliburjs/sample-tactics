import * as ex from "excalibur";
import { Board } from "./board";
import { HeartSpriteSheet, Resources, SpiderSpriteSheet } from "./resources";
import { SCALE, UNIT_CONFIG, UnitConfig, UnitType } from "./config";
import { Cell } from "./cell";
import { PathNodeComponent } from "./path-finding/path-node-component";
import { Player } from "./player";

export class Unit extends ex.Actor {
    cell: Cell | null = null;
    unitConfig: UnitConfig;
    constructor(x: number, y: number, unitType: UnitType, board: Board, public player: Player)  {
        super({
            anchor: ex.vec(0, 0)
        });
        this.unitConfig = {...UNIT_CONFIG[unitType]};

        const anim = this.unitConfig.graphics.idle;
        anim.scale = SCALE;
        this.graphics.use(anim);
        this.graphics.onPostDraw = this.onPostDraw.bind(this);

        const cell = board.getCell(x, y);
        if (cell) {
            this.pos = cell.pos.sub(this.unitConfig.graphics.offset);
            cell.addUnit(this);
        }
    }

    onPostDraw(ctx: ex.ExcaliburGraphicsContext) {
        const heart = HeartSpriteSheet.getSprite(ex.clamp(this.unitConfig.health, 0, 5), 0);
        if (heart) {
            heart.scale = SCALE;
            heart.draw(ctx, 10 * SCALE.x, 16 * SCALE.y);
        }
    }

    async move(path: PathNodeComponent[]) {
        if (this.cell) {
            this.cell.removeUnit(this);
        }
        let currentCell: Cell | null = null;
        let pathMinusFirst = path.slice(1, path.length);
        for (let node of pathMinusFirst) {
            currentCell = node.owner as Cell;
            const sound = new ex.ActionSequence(this, (ctx) => {
                ctx.delay(200);
                ctx.callMethod(() => {
                    Resources.MoveSound.play();
                });
            });

            const move = new ex.ActionSequence(this, (ctx) => {
                ctx.easeTo(currentCell!.pos.sub(this.unitConfig.graphics.offset), 300, ex.EasingFunctions.EaseInOutCubic);
            });

            const parallel = new ex.ParallelActions([
                sound,
                move
            ])
            await this.actions.runAction(parallel).toPromise();
        }
        if (currentCell) {
            currentCell.addUnit(this);
        }
    }
}