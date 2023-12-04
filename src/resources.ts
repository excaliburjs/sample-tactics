import * as ex from 'excalibur';


import TitleImagePath from '../res/title.png';
import KnightSpriteSheetPath from '../res/KnightSheet.png';
import SpiderSheetPath from '../res/SpiderSheet.png';
import SlimeSheetPath from '../res/slime.png';
import CrabSheetPath from '../res/crab.png';
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
import TargetSelectPath from '../res/targetselect.wav';
import TutorialTextPath from '../res/tutorial-text.png';
import LevelMusic1Path from '../res/5 Action Chiptunes By Juhani Junkala/Juhani Junkala [Retro Game Music Pack] Level 3.wav';
import LevelMusic2Path from '../res/gba1complete.mp3';
import ExplosionPath from '../res/explosion.png';
import ExplosionSoundPath from '../res/explosion.wav';
import TitleScreenMusic from '../res/two_left_socks.ogg';

export const Resources = {
    TitleImage: new ex.ImageSource(TitleImagePath),
    KnightSpriteSheet: new ex.ImageSource(KnightSpriteSheetPath),
    SpiderSheet: new ex.ImageSource(SpiderSheetPath),
    SlimeSheet: new ex.ImageSource(SlimeSheetPath),
    CrabSheet: new ex.ImageSource(CrabSheetPath),
    HeartSheet: new ex.ImageSource(HeartSheetPath),
    UISheet: new ex.ImageSource(UISheetPath),
    TerrainSheet: new ex.ImageSource(TerrainSheetPath),
    HighlightSheet: new ex.ImageSource(HighlightSheetPath),
    RedHighlightSheet: new ex.ImageSource(RedHighlightSheetPath),
    CloudSheet: new ex.ImageSource(CloudSheetPath),
    SmokeSheet: new ex.ImageSource(SmokePath),
    TutorialText: new ex.ImageSource(TutorialTextPath),
    ExplosionSheet: new ex.ImageSource(ExplosionPath),
    HitSound: new ex.Sound(HitSoundPath),
    MoveSound: new ex.Sound(MoveSoundPath),
    SelectSound: new ex.Sound(SelectSoundPath),
    TargetSelectSound: new ex.Sound(TargetSelectPath),
    LevelMusic1: new ex.Sound(LevelMusic1Path),
    LevelMusic2: new ex.Sound(LevelMusic2Path),
    ExplosionSound: new ex.Sound(ExplosionSoundPath),
    TitleMusic: new ex.Sound(TitleScreenMusic),
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

export const SlimeSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.SlimeSheet,
    grid: {
        rows: 1,
        columns: 4,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const SlimeIdle =  ex.Animation.fromSpriteSheetCoordinates({
    spriteSheet: SlimeSpriteSheet,
    strategy: ex.AnimationStrategy.Loop,
    frameCoordinates: [
        {x: 0, y: 0, duration: 200},
        {x: 1, y: 0, duration: 200},
        {x: 2, y: 0, duration: 200},
        {x: 3, y: 0, duration: 200}
    ]
});

export const CrabSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.CrabSheet,
    grid: {
        rows: 1,
        columns: 4,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const CrabIdle =  ex.Animation.fromSpriteSheetCoordinates({
    spriteSheet: CrabSpriteSheet,
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

export const ExplosionSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.ExplosionSheet,
    grid: {
        rows: 2,
        columns: 5,
        spriteHeight: 32,
        spriteWidth: 32
    }
});

export const Explosion = ex.Animation.fromSpriteSheetCoordinates({
    spriteSheet: ExplosionSpriteSheet,
    frameCoordinates: [
        {x: 0, y: 0, duration: 100 },
        {x: 1, y: 0, duration: 100 },
        {x: 2, y: 0, duration: 100 },
        {x: 3, y: 0, duration: 100 },
        {x: 4, y: 0, duration: 100 },
        {x: 0, y: 1, duration: 100 },
        {x: 1, y: 1, duration: 100 },
        {x: 2, y: 1, duration: 100 },
    ]
})

export const Smoke = Resources.SmokeSheet.toSprite();

export const Title = Resources.TitleImage.toSprite();

export const loader = new ex.Loader();

for (let res of Object.values(Resources)) {
    loader.addResource(res);
}