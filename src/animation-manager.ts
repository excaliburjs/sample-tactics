import * as ex from 'excalibur';
import { Explosion } from './resources';
import { SCALE } from './config';

export class AnimationManager {
    constructor(public scene: ex.Scene) {}
    playExplosion(pos: ex.Vector) {
        const explosionActor = new ex.Actor({
            name: 'explosion',
            pos: pos.add(ex.vec(16, 16).scale(SCALE)),
        });
        Explosion.reset();
        Explosion.strategy = ex.AnimationStrategy.End;
        Explosion.scale = SCALE;
        Explosion.events.once('ended', () => {
            explosionActor.kill();
        });

        explosionActor.graphics.use(Explosion);
        this.scene.add(explosionActor);
    }
}