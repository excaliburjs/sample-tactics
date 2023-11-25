import * as ex from "excalibur";
import { Board } from "./board";
import { Explosion, HeartSpriteSheet, Resources, Smoke, SpiderSpriteSheet } from "./resources";
import { SCALE, UNIT_CONFIG, UnitConfig, UnitType } from "./config";
import { Cell } from "./cell";
import { PathNodeComponent } from "./path-finding/path-node-component";
import { Player } from "./player";
import { DustParticles } from "./dust-particles";
import { DamageManager } from "./damage-manager";
import { AnimationManager } from "./animation-manager";



export class Unit extends ex.Actor {
    cell: Cell | null = null;
    unitConfig: UnitConfig;
    moved = false;
    attacked = false;
    anim: ex.Animation;
    health: number;
    damageManager!: DamageManager;
    animationManger!: AnimationManager;
    constructor(x: number, y: number, unitType: UnitType, board: Board, public player: Player)  {
        super({
            name: unitType,
            anchor: ex.vec(0, 0),
            z: 2
        });
        this.unitConfig = {...UNIT_CONFIG[unitType]};

        this.health = this.unitConfig.health;

        this.anim = this.unitConfig.graphics.idle.clone();
        this.anim.scale = SCALE;
        this.graphics.use(this.anim);
        this.graphics.onPostDraw = this.onPostDraw.bind(this);

        const cell = board.getCell(x, y);
        if (cell) {
            this.pos = cell.pos.sub(this.unitConfig.graphics.offset);
            cell.addUnit(this);
        }
    }

    onInitialize(engine: ex.Engine): void {
        this.damageManager = new DamageManager(engine.currentScene);
        this.animationManger = new AnimationManager(engine.currentScene);
    }

    onPostUpdate(): void {
        if (!this.hasActions()) {
            this.anim.tint = ex.Color.Gray;
        } else {
            this.anim.tint = ex.Color.White;
        }

        if (this.health <= 0) {
            this.cell?.removeUnit(this);
            this.actions.delay(500).callMethod(() => {
                this.animationManger.playExplosion(this.pos);
                Resources.ExplosionSound.play();
            }).callMethod(() => {
                this.kill();
            });
        }
    }

    onPostDraw(ctx: ex.ExcaliburGraphicsContext) {
        if (this.health > 0) {
            const heart = HeartSpriteSheet.getSprite(ex.clamp(this.health, 0, 5), 0);
            if (heart) {
                heart.scale = SCALE;
                heart.draw(ctx, 
                    10 * SCALE.x + this.unitConfig.graphics.offset.x,
                    10 * SCALE.y + this.unitConfig.graphics.offset.y
                );
            }
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
                ctx.callMethod(() => {
                    DustParticles.pos = this.pos.add(SCALE.scale(16));
                    DustParticles.emitParticles(5);
                })
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
        this.moved = true;
    }

    reset() {
        this.moved = false;
        this.attacked = false;
    }

    canAttack() {
        return this.getPossibleTargets()?.length !== 0 && !this.attacked;
    }

    canMove() {
        return !this.moved;
    }

    hasActions() {
        return this.canMove() || this.canAttack();
    }

    availableActions() {
        let available: ('move' | 'attack')[] = [];
        if (this.canMove()) {
            available.push('move');
        }
        if (this.canAttack()) {
            available.push('attack');
        }
        return available;
    }

    pass() {
        this.moved = true;
        this.attacked = true;
    }

    getPossibleTargets() {
        if (this.cell) {
            const range = this.cell.board.pathFinder.getRange(this.cell.pathNode, ~this.player.mask, this.unitConfig.range);
            const cellsWithEnemies = range.map(node => node.owner as Cell).filter(cell => {
                if (cell.unit?.player) {
                    return cell.unit.player !== this.player;
                }
                return false;
            } );
            return cellsWithEnemies;
        }
    }

    async attack(other: Unit) {
        other.health -= this.unitConfig.attack;
        Resources.HitSound.play();

        this.damageManager.spawnDamageNumber(other.pos.add(other.unitConfig.graphics.offset).add(ex.vec(16 * SCALE.x, 0)), this.unitConfig.attack);
        await other.actions.blink(200, 200, 5).toPromise();
        this.attacked = true;
    }
}