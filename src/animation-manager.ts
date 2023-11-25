import * as ex from 'excalibur';
import { Explosion } from './resources';
import { SCALE } from './config';

export class AnimationManager {
    constructor(public scene: ex.Scene) {}
    playExplosion(pos: ex.Vector) {
        const explosion = new ex.Actor({
            pos: pos.add(ex.vec(16, 16).scale(SCALE)),
        });
        Explosion.reset();
        Explosion.strategy = ex.AnimationStrategy.End;
        Explosion.scale = SCALE;
        explosion.graphics.use(Explosion);
        Explosion.events.once('ended', () => {
            explosion.kill();
        });

        this.scene.add(explosion);
    }
}