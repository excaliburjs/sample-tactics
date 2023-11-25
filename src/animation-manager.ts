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
        const sub = Explosion.events.on('frame', data => {
            if (data.frameIndex === 7) {
                explosionActor.kill();
                sub.close();
            }
        });

        explosionActor.graphics.use(Explosion);
        this.scene.add(explosionActor);
    }
}