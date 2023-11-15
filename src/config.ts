import * as ex from "excalibur";

export const SCALE = ex.vec(3, 3);
export const BOARD_OFFSET = ex.vec(32 * 3, 32 * 4);

export type UnitType = "Knight" | "Spider";
export interface UnitConfig {
    health: number;
    range: number;
    attack: number;
}
export const UNIT_CONFIG: Record<UnitType, UnitConfig> = {
    Knight: {
        health: 5,
        range: 4,
        attack: 2
    },
    Spider: {
        health: 3,
        range: 3,
        attack: 1
    }
} as const;

