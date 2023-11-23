import * as ex from 'excalibur';
import { LevelBase, LevelData } from './level-base';
import { SCALE } from '../config';

export const TestLevelData: LevelData = {
    name: 'Gentle Plains',
    width: 6,
    height: 6,
    maxTurns: 10,
    players: ['human', 'computer'],
    data: [
        'GK1', 'G', 'G', 'GS2', 'G', 'GS2',
        'GK1', 'G', 'GS2', 'G', 'G', 'GS2',
        'G', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'W', 'W', 'G', 'G',
        'G', 'G', 'G', 'G', 'G', 'G'
    ]
}
export class Tutorial extends LevelBase {
    focus!: ex.Actor;
    
    // TODO cinematic?
    constructor() {
        super(TestLevelData);
    }
    
    onInitialize(engine: ex.Engine): void {
        super.onInitialize(engine);
        const unit = this.board.cells[0].unit;
        if (unit) {
            this.focus = new ex.Actor({
                pos: unit.pos.add(ex.vec(16, 16).scale(SCALE))
            });
        }
    }

    onActivate(): void {
        this.camera.strategy.lockToActor(this.focus)
        this.camera.zoomOverTime(4, 1000, ex.EasingFunctions.EaseInOutCubic);
    }

}