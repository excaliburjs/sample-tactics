import * as ex from 'excalibur';


import UnitSpriteSheetPath from '../res/UnitSpriteSheetNew.png';
import SpiderSheetPath from '../res/SpiderSheet.png';
import HeartSheetPath from '../res/HeartSheet.png';
import UISheetPath from '../res/UISheet.png';
import TerrainSheetPath from '../res/TerrainSheet.png';
import HighlightSheetPath from '../res/HighlightSheet.png';
import CloudSheetPath from '../res/Cloud.png';
import SmokePath from '../res/Smoke.png';
import HitSoundPath from '../res/hit.wav';
import MoveSoundPath from '../res/move.wav';
import SelectSoundPath from '../res/unitselect.wav';

export const Resources = {
    UnitSpriteSheet: new ex.ImageSource(UnitSpriteSheetPath),
    SpiderSheet: new ex.ImageSource(SpiderSheetPath),
    HeartSheet: new ex.ImageSource(HeartSheetPath),
    UISheet: new ex.ImageSource(UISheetPath),
    TerrainSheet: new ex.ImageSource(TerrainSheetPath),
    HighlightSheet: new ex.ImageSource(HighlightSheetPath),
    CloudSheet: new ex.ImageSource(CloudSheetPath),
    Smoke: new ex.ImageSource(SmokePath),
    HitSound: new ex.Sound(HitSoundPath),
    MoveSound: new ex.Sound(MoveSoundPath),
    SelectSound: new ex.Sound(SelectSoundPath),
} as const;

export const TerrainSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.TerrainSheet,
    grid: {
        rows: 5,
        columns: 5,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const loader = new ex.Loader();

for (let res of Object.values(Resources)) {
    loader.addResource(res);
}