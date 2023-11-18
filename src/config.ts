import * as ex from "excalibur";

import { KnightIdle, SpiderIdle } from "./resources";

export const SCALE = ex.vec(3, 3);
export const BOARD_OFFSET = ex.vec(32 * 3, 32 * 4);

export type UnitType = "Knight" | "Spider";
export interface UnitConfig {
    graphics: {
        offset: ex.Vector,
        idle: ex.Animation
    }
    health: number;
    range: number;
    attack: number;
}
export const UNIT_CONFIG: Record<UnitType, UnitConfig> = {
    Knight: {
        graphics: {
            offset: ex.vec(0, 12 * SCALE.y),
            idle: KnightIdle
        },
        health: 5,
        range: 4,
        attack: 2
    },
    Spider: {
        graphics: {
            offset: ex.vec(0, 8 * SCALE.y),
            idle: SpiderIdle
        },
        health: 3,
        range: 3,
        attack: 1
    }
} as const;

