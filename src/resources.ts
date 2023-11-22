import * as ex from 'excalibur';


import KnightSpriteSheetPath from '../res/KnightSheet.png';
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
    KnightSpriteSheet: new ex.ImageSource(KnightSpriteSheetPath),
    SpiderSheet: new ex.ImageSource(SpiderSheetPath),
    HeartSheet: new ex.ImageSource(HeartSheetPath),
    UISheet: new ex.ImageSource(UISheetPath),
    TerrainSheet: new ex.ImageSource(TerrainSheetPath),
    HighlightSheet: new ex.ImageSource(HighlightSheetPath),
    CloudSheet: new ex.ImageSource(CloudSheetPath),
    SmokeSheet: new ex.ImageSource(SmokePath),
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

export const HighlightSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.HighlightSheet,
    grid: {
        rows: 1,
        columns: 5,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const HighlightAnimation = ex.Animation.fromSpriteSheetCoordinates({
    spriteSheet: HighlightSpriteSheet,
    strategy: ex.AnimationStrategy.Loop,
    frameCoordinates: [
        {x: 0, y: 0, duration: 100 },
        {x: 1, y: 0, duration: 100 },
        {x: 2, y: 0, duration: 100 },
        {x: 3, y: 0, duration: 100 },
        {x: 4, y: 0, duration: 100 },
    ]
})


export const SpiderSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.SpiderSheet,
    grid: {
        rows: 1,
        columns: 4,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const SpiderIdle =  ex.Animation.fromSpriteSheetCoordinates({
    spriteSheet: SpiderSpriteSheet,
    strategy: ex.AnimationStrategy.Loop,
    frameCoordinates: [
        {x: 0, y: 0, duration: 200},
        {x: 1, y: 0, duration: 200},
        {x: 2, y: 0, duration: 200},
        {x: 3, y: 0, duration: 200}
    ]
});

export const KnightSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.KnightSpriteSheet,
    grid: {
        rows: 1,
        columns: 4,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const KnightIdle =  ex.Animation.fromSpriteSheetCoordinates({
    spriteSheet: KnightSpriteSheet,
    strategy: ex.AnimationStrategy.Loop,
    frameCoordinates: [
        {x: 0, y: 0, duration: 200},
        {x: 1, y: 0, duration: 200},
        {x: 2, y: 0, duration: 200},
        {x: 3, y: 0, duration: 200}
    ]
});

export const HeartSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.HeartSheet,
    grid: {
        rows: 1,
        columns: 6,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const Smoke = Resources.SmokeSheet.toSprite();

export const loader = new ex.Loader();

for (let res of Object.values(Resources)) {
    loader.addResource(res);
}