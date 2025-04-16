import * as ex from 'excalibur';

import { Resources } from "./resources";


export class AudioManager {
    static levels = new Map<ex.Sound, number>([
        [Resources.HitSound, .5],
        [Resources.MoveSound, .5],
        [Resources.SelectSound, .5],
        [Resources.TargetSelectSound, .5],
        [Resources.LevelMusic1, .25],
        [Resources.LevelMusic2, .25],
        [Resources.ExplosionSound, .20],
        [Resources.TitleMusic, .25],
    ])

    static init() {
        for (let resource of Object.values(Resources)){
            if (resource instanceof ex.Sound) {
                resource.volume = AudioManager.levels.get(resource) ?? 1.0;
            }
        }
    }
    
    static toggleMute(shouldMute: boolean) {
        for (let resource of Object.values(Resources)){
            if (resource instanceof ex.Sound) {
                resource.volume = shouldMute ? 0 : (AudioManager.levels.get(resource) ?? 1.0);
            }
        }
    }
}