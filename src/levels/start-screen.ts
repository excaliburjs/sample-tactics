import * as ex from 'excalibur';
import { Cloud } from '../cloud';
import { Resources, Title } from '../resources';
import { SCALE } from '../config';

export class StartScreen extends ex.Scene {
    title!: ex.Actor;
    instructions!: ex.Actor;
    override onInitialize(engine: ex.Engine): void {
        this.engine = engine;
        this.input.pointers.on('down', () => {
            this.engine.goToScene('tutorial');
        });
        this.input.keyboard.on('press', () => {
            this.engine.goToScene('tutorial');
        });

        this.add(new Cloud(ex.vec(800, 0)));
        this.add(new Cloud(ex.vec(400, 300)));
        this.add(new Cloud(ex.vec(700, 700)));

        this.title = new ex.Actor({
            name: 'title',
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
            name: 'instructions',
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
            ctx.rotateTo(Math.PI/32, .2)
            ctx.rotateTo(-Math.PI/32, .2)
        });

        this.add(this.instructions);
    }

    _subscriptions: ex.Subscription[] = [];
    onActivate(): void {
        console.log('activate start screen')
        Resources.TitleMusic.loop = true;
        Resources.TitleMusic.play();

        

    }
    onDeactivate(): void {
        Resources.TitleMusic.stop();
        this._subscriptions.forEach(h => h.close());
    }
}