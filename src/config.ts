import * as ex from "excalibur";

import { KnightIdle, SpiderIdle } from "./resources";
const seed = performance.now();
console.log("Random seed:", seed);
export const RANDOM = new ex.Random(seed);

export const SCALE = ex.vec(3, 3);
export const BOARD_OFFSET = ex.vec(32 * 3, 32 * 4);

export type UnitType = "Knight" | "Spider";
export interface UnitConfig {
    graphics: {
        offset: ex.Vector,
        idle: ex.Animation
    }
    health: number;
    movement: number;
    attack: number;
    range: number;
}
export const UNIT_CONFIG: Record<UnitType, UnitConfig> = {
    Knight: {
        graphics: {
            offset: ex.vec(0, 12 * SCALE.y),
            idle: KnightIdle
        },
        health: 5,
        movement: 4,
        attack: 2,
        range: 1
    },
    Spider: {
        graphics: {
            offset: ex.vec(0, 8 * SCALE.y),
            idle: SpiderIdle
        },
        health: 3,
        movement: 3,
        attack: 1,
        range: 1
    }
} as const;

