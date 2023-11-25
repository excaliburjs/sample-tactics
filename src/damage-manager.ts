import * as ex from 'excalibur';
import { SCALE } from './config';

export class Damage extends ex.Actor {
    constructor(pos: ex.Vector, damage: number) {
        super({
            name: 'damage',
            pos,
            z: 10
        });

        const font = new ex.Font({
            family: 'notjamslab14',
            size: 16 * SCALE.x,
            unit: ex.FontUnit.Px,
            color: ex.Color.Yellow,
            baseAlign: ex.BaseAlign.Top,
            quality: 4,
            shadow: {
                offset: ex.vec(2, 2).scale(SCALE),
                color: ex.Color.Black
            }
        });

        const text = new ex.Text({
            text: damage.toFixed(0),
            font
        });
        this.graphics.add(text);
    }
}

export class DamageManager {

    constructor(public scene: ex.Scene) {}

    spawnDamageNumber(pos: ex.Vector, damage: number) {
        const damageNumber = new Damage(pos, damage);
        damageNumber.actions.easeBy(ex.vec(0, -100), 1000, ex.EasingFunctions.EaseOutCubic).die();
        this.scene.add(damageNumber);
    }
} 