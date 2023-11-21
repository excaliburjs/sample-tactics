import * as ex from 'excalibur';

import './ui-components/unit-menu';
import { UnitMenu } from "./ui-components/unit-menu";
import { SCALE } from "./config";
import { Unit } from "./unit";
import { LitElement } from 'lit';

export interface MenuOptions {
    move: () => any;
    attack: () => any;
    pass: () => any;
}

/**
 * UI manager create html elements for game UI
 */
export class UIManager {
    uiToWorldPos = new Map<UnitMenu, ex.Vector>();

    unitMenu: UnitMenu;
    constructor(private engine: ex.Engine) {
        this.unitMenu = new UnitMenu();
        document.body.appendChild(this.unitMenu);
        document.documentElement.style.setProperty('--pixel-conversion', this.worldDistanceToPage(1).toString());
        window.addEventListener('resize', () => {
            document.documentElement.style.setProperty('--pixel-conversion', this.worldDistanceToPage(1).toString());

            const menuPos = this.uiToWorldPos.get(this.unitMenu)
            if (menuPos) {
                const pagePos = this.engine.screen.worldToPageCoordinates(menuPos);
                this.unitMenu.left = pagePos.x + this.worldDistanceToPage(32);
                this.unitMenu.top = pagePos.y;
            }
        });
        
    }

    worldDistanceToPage(distance: number) {
        const pageOrigin = this.engine.screen.worldToPageCoordinates(ex.Vector.Zero);
        const pageDistance = this.engine.screen.worldToPageCoordinates(ex.vec(distance * SCALE.x, 0)).sub(pageOrigin);
        return pageDistance.x;
    }

    showUnitMenu(unit: Unit, options: MenuOptions): UnitMenu {
        const menu = this.unitMenu;
        const pagePos = this.engine.screen.worldToPageCoordinates(unit.pos);
        menu.left = pagePos.x + this.worldDistanceToPage(32);
        menu.top = pagePos.y;
        menu.unit = unit;

        const move = () => {
            options.move();
            clearEvents();
        }
        const attack = () => {
            options.attack();
            clearEvents();
        }
        const pass = () => {
            options.pass();
            clearEvents();
        }

        menu.addEventListener('move', move);
        menu.addEventListener('attack', attack);
        menu.addEventListener('pass', pass);

        const clearEvents = () => {
            menu.removeEventListener('move', move);
            menu.removeEventListener('attack', attack);
            menu.removeEventListener('pass', pass);
        }

        menu.clearEvents = clearEvents;
        menu.show();

        this.uiToWorldPos.set(menu, unit.pos);

        return menu;
    }
}