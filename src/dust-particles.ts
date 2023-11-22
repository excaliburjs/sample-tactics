import * as ex from 'excalibur';
import { Smoke } from './resources';

export const DustParticles = new ex.ParticleEmitter({
    emitterType: ex.EmitterType.Circle,
    radius: 16,
    minVel: 0,
    maxVel: 20,
    minAngle: 0,
    maxAngle: 6.2,
    isEmitting: false,
    emitRate: 8,
    opacity: 0.75,
    fadeFlag: true,
    particleLife: 1500,
    maxSize: 20,
    minSize: 1,
    startSize: 10,
    endSize: .01,
    acceleration: ex.vec(0, -32),
    particleSprite: Smoke,
    randomRotation: true,
    particleRotationalVelocity: Math.PI,
});