import * as ex from 'excalibur';


import TitleImagePath from '../res/title.png';
import KnightSpriteSheetPath from '../res/KnightSheet.png';
import SpiderSheetPath from '../res/SpiderSheet.png';
import HeartSheetPath from '../res/HeartSheet.png';
import UISheetPath from '../res/UISheet.png';
import TerrainSheetPath from '../res/TerrainSheet.png';
import HighlightSheetPath from '../res/HighlightSheet.png';
import RedHighlightSheetPath from '../res/RedHighlightSheet.png';
import CloudSheetPath from '../res/Cloud.png';
import SmokePath from '../res/Smoke.png';
import HitSoundPath from '../res/hit.wav';
import MoveSoundPath from '../res/move.wav';
import SelectSoundPath from '../res/unitselect.wav';
import TutorialTextPath from '../res/tutorial-text.png';

export const Resources = {
    TitleImage: new ex.ImageSource(TitleImagePath),
    KnightSpriteSheet: new ex.ImageSource(KnightSpriteSheetPath),
    SpiderSheet: new ex.ImageSource(SpiderSheetPath),
    HeartSheet: new ex.ImageSource(HeartSheetPath),
    UISheet: new ex.ImageSource(UISheetPath),
    TerrainSheet: new ex.ImageSource(TerrainSheetPath),
    HighlightSheet: new ex.ImageSource(HighlightSheetPath),
    RedHighlightSheet: new ex.ImageSource(RedHighlightSheetPath),
    CloudSheet: new ex.ImageSource(CloudSheetPath),
    SmokeSheet: new ex.ImageSource(SmokePath),
    TutorialText: new ex.ImageSource(TutorialTextPath),
    HitSound: new ex.Sound(HitSoundPath),
    MoveSound: new ex.Sound(MoveSoundPath),
    SelectSound: new ex.Sound(SelectSoundPath),
} as const;

export const TutorialTextSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.TutorialText,
    grid: {
        rows: 1,
        columns: 8,
        spriteWidth: 128,
        spriteHeight: 64
    }
})

export const TerrainSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.TerrainSheet,
    grid: {
        rows: 5,
        columns: 5,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const CursorAnimation = ex.Animation.fromSpriteSheetCoordinates({
    spriteSheet: TerrainSpriteSheet,
    frameCoordinates: [
        { x: 1, y: 1, duration: 200 },
        { x: 2, y: 1, duration: 200 },
        { x: 3, y: 1, duration: 200 },
        { x: 3, y: 1, duration: 200 },
        { x: 3, y: 1, duration: 200 },
        { x: 2, y: 1, duration: 200 },
    ]
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
export const RedHighlightSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.RedHighlightSheet,
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
});

export const RedHighlightAnimation = ex.Animation.fromSpriteSheetCoordinates({
    spriteSheet: RedHighlightSpriteSheet,
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

export const Title = Resources.TitleImage.toSprite();

export const loader = new ex.Loader();

for (let res of Object.values(Resources)) {
    loader.addResource(res);
}