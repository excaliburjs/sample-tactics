import * as ex from 'excalibur';
import { Cloud } from '../cloud';
import { Title } from '../resources';
import { SCALE } from '../config';

export class StartScreen extends ex.Scene {
    title!: ex.Actor;
    instructions!: ex.Actor;
    override onInitialize(engine: ex.Engine): void {
        engine.input.pointers.primary.once('down', () => {
            engine.goToScene('level1');
        });

        this.add(new Cloud(ex.vec(800, 0)));
        this.add(new Cloud(ex.vec(400, 300)));
        this.add(new Cloud(ex.vec(700, 700)));

        this.title = new ex.Actor({
            pos: ex.vec(400, 400),
            coordPlane: ex.CoordPlane.Screen,
        });
        this.title.scale = SCALE;
        this.title.graphics.use(Title);
        this.title.actions.repeatForever(ctx => {
            ctx.easeBy(ex.vec(0, -30 * SCALE.y), 1000, ex.EasingFunctions.EaseInOutQuad)
               .easeBy(ex.vec(0, 30 * SCALE.y), 1000, ex.EasingFunctions.EaseInOutQuad)
        });

        this.add(this.title);

        this.instructions = new ex.Actor({
            pos: ex.vec(400, 600),
            coordPlane: ex.CoordPlane.Screen
        });
        const font = new ex.Font({
            family: 'notjamslab14',
            size: 32 * SCALE.x,
            unit: ex.FontUnit.Px,
            color: ex.Color.White,
            baseAlign: ex.BaseAlign.Top,
            quality: 4,
            shadow: {
                offset: ex.vec(10, 10).scale(SCALE),
                color: ex.Color.Black
            }
        });
        const text = new ex.Text({
            text: 'Click to Play!',
            font: font
        });
        this.instructions.graphics.use(text);
        this.instructions.actions.repeatForever(ctx => {
            // ctx.blink(300, 300, 2);
            ctx.rotateTo(Math.PI/32, .2)
            ctx.rotateTo(-Math.PI/32, .2)
        });

        this.add(this.instructions);
    }
}