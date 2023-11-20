import { Vector } from "excalibur";

import './ui-components/unit-menu';
import { UnitMenu } from "./ui-components/unit-menu";
import { SCALE } from "./config";
import { Unit } from "./unit";

export interface MenuOptions {
    move: () => any;
    attack: () => any;
    pass: () => any;
}

/**
 * UI manager create html elements for game UI
 */
export class UIManager {
    // todo handle game resizing

    unitMenu = new UnitMenu();
    constructor(private engine: ex.Engine) {
        document.body.appendChild(this.unitMenu);
    }

    showUnitMenu(unit: Unit, options: MenuOptions): UnitMenu {
        const screenPos = this.engine.screen.worldToPageCoordinates(unit.pos);

        const menu = this.unitMenu;
        menu.left = screenPos.x + 48 * SCALE.x;
        menu.top = screenPos.y;

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

        menu.show = true;

        return menu;
    }
}