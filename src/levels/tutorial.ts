import * as ex from 'excalibur';
import { LevelBase, LevelData } from './level-base';
import { SCALE } from '../config';
import { Resources, TutorialTextSheet } from '../resources';
import { UnitMenu } from '../ui-components/unit-menu';
import { HumanPlayer } from '../human-player';

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
                pos: unit.pos.add(ex.vec(16, 16).scale(SCALE)),
                width: 32,
                height: 32,
                anchor: ex.vec(0, 1),
                z: 10
            });
            this.focus.graphics.opacity = 0;
            this.engine.add(this.focus);
        }
    }

    async moveToUnit1() {
        const pos = this.board.getCell(0, 0)!.unit!.pos.add(ex.vec(16, 16).scale(SCALE));
        await this.focus.actions.easeTo(pos, 1000, ex.EasingFunctions.EaseInOutCubic).toPromise();
    }

    async selectUnit1() {
        this.selectionManager.selectPlayer(this.players[0]);
        const unit1 = this.board.getCell(0, 0)!.unit!;
        const menu = this.uiManager.showUnitMenu(unit1, {
            move: () => {},
            attack: () => {},
            pass: () => { }
        });
        await ex.Util.delay(1000);

        menu.hide();

        this.selectionManager.selectUnit(unit1, 'move');

        const currentRange = this.selectionManager.findMovementRange(unit1);
        const cell = this.board.getCell(2, 0)
        const currentPath = this.selectionManager.findPath(cell!, currentRange);
        this.selectionManager.showHighlight(currentPath, 'path');
        
        await ex.Util.delay(1000);

        await this.selectionManager.selectDestinationAndMove(unit1, cell!);

        menu.show();

        await ex.Util.delay(2000);

        this.selectionManager.selectUnit(unit1, 'attack');
        const currentAttackRange = this.selectionManager.findAttackRange(unit1);
        this.selectionManager.showHighlight(currentAttackRange, 'attack');

        await ex.Util.delay(1000);

        const attackCell = this.board.getCell(2, 1);
        this.selectionManager.showHighlight([attackCell!.pathNode], "path");

        menu.hide();
        this.selectionManager.reset();

        const enemy = this.board.getCell(2, 1)!.unit!;

        unit1.attack(enemy);

        await ex.Util.delay(2000);
    }

    async highlightEnemyRange() {
        const humanPlayer = this.players[0] as HumanPlayer;
        const enemyCell = this.board.getCell(2, 1);
        await humanPlayer.highlightUnitRange(enemyCell);

        await ex.Util.delay(1000);
        this.selectionManager.reset();
    }

    async moveToUnit2() {
        const pos = this.board.getCell(0, 1)!.unit!.pos.add(ex.vec(16, 16).scale(SCALE));
        await this.focus.actions.easeTo(pos, 1000, ex.EasingFunctions.EaseInOutCubic).toPromise();
    }

    async showText(index: number) {
        const text = TutorialTextSheet.getSprite(index, 0) as ex.Sprite;
        text.scale = SCALE;
        this.focus.graphics.use(text);
        await this.focus.actions.fade(1, 200).toPromise();
    }

    async hideText() {
        await this.focus.actions.fade(0, 200).toPromise();
    }

    async onActivate() {
        this.camera.strategy.lockToActor(this.focus)
        this.camera.zoomOverTime(1.25, 1000, ex.EasingFunctions.EaseInOutCubic);

        await ex.Util.delay(1000);

        // hey look at all these spiders!
        await this.showText(1);
        await this.focus.actions.delay(1000);
        await this.hideText();

        // we need to take them out to get home!
        await this.moveToUnit2();
        await this.showText(2);
        await this.focus.actions.delay(1000);
        await this.hideText();

        // how do we do that?!?
        await this.moveToUnit1();
        await this.showText(3);
        await this.focus.actions.delay(1000);
        await this.hideText();

        // left click to move/attack, right click to see friendly/enemy range
        await this.moveToUnit2();
        await this.showText(4);
        await this.focus.actions.delay(4000);
        await this.hideText();

        await this.selectUnit1();

        // we have a limited amount of turns to complete the level!
        await this.moveToUnit2();
        await this.showText(5);
        await this.focus.actions.delay(1000);
        await this.hideText();

        await this.highlightEnemyRange();

        await this.showText(6);
        await this.focus.actions.delay(2000);
        await this.hideText();

        await this.showText(7);
        await this.focus.actions.delay(7000);
        await this.hideText();

        this.camera.zoomOverTime(1, 1000, ex.EasingFunctions.EaseInOutCubic);

        this.engine.goToScene('level1');
    }

}