import * as ex from 'excalibur';

import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators'
import {styleMap} from 'lit/directives/style-map'
import {classMap} from 'lit/directives/class-map'
import { Unit } from '../unit';

@customElement('unit-menu')
export class UnitMenu extends LitElement {
    static override styles = css`
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(50%);
            }
            to {
                opacity: 1;
                transform: translateY(0%);
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateY(0%);
            }
            to {
                opacity: 0;
                transform: translateY(50%);
            }
        }

        .menu {
            position: absolute;
            top: 0;
            left: 0;
            width: calc(64px * var(--pixel-conversion));
            display: none;
            opacity: 0;
            flex-direction: column;
            font-size: calc(8px * var(--pixel-conversion));
            background-color: rgba(240, 220, 220, 1);

            border: black calc(1px * var(--pixel-conversion)) solid;
            z-index: 1;
        }

        .overlay {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }

        .show {
            display: flex;
            opacity: 1;
            animation: fadeIn 140ms ease normal;
        }

        .hide {
            animation: fadeOut 140ms ease normal;
        }

        .options {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            background-color: red;
            width: 100%;
            height: calc(7px * var(--pixel-conversion));
        }

        button {
            all: unset;
            padding: calc(2px * var(--pixel-conversion));
            padding-left: calc(4px * var(--pixel-conversion));
            cursor: pointer;
        }

        button:focus, button:hover, .focus {
            background-color: rgba(220, 200, 200, 1);
        }

        button:active, .active {
            background-color: rgba(250, 240, 240, 1);
        }
    `

    @property({type: Number})
    left: number = 0;

    @property({type: Number})
    top: number = 0;

    @property({type: Number})
    fontSize: number = 0;

    @property({type: Number})
    width: number = 0;

    @property({attribute: false})
    unit: Unit | null = null;

    @property({type: Number})
    pixelConversion: number = 1;

    @state()
    private _show: boolean = false;

    @query('.menu')
    menuHtml?: HTMLDivElement;

    clearEvents: () => any = () => {};

    override firstUpdated(): void {
        this.menuHtml?.addEventListener('animationend', evt => {
            if (evt.animationName === 'fadeOut') {
                this._show = false;
                this.menuHtml?.classList.remove('hide');
                this.requestUpdate();
            }
        })
    }

    sendEvent(type: string) {
        return () => {
            this.dispatchEvent(new Event(type))
            this.hide();
            this.requestUpdate();
        }
    }

    // Debounce needed for mobile for some reason
    // Overlay is also receiving the event
    private _debounce: number = 0;
    show() {
        this._show = true;
        this._debounce = Date.now();
    }

    hide() {
        const now = Date.now();
        if (now - this._debounce > 200) {
            this.menuHtml?.classList.add('hide');
            this.clearEvents();
        }
    }

    override render() {
        const dismissOverlayHtml = this._show ? html`<div class="overlay" @click=${this.hide}></div>` : nothing;

        return html`
        ${dismissOverlayHtml}
        <div class=${classMap({
            menu: true,
            show: this._show
        })} style=${styleMap({
            left: `${this.left}px`, 
            top: `${this.top}px`
        })}>
            <div class="title-bar"></div>
            <div class="options">
                <button style=${styleMap({display: this.unit?.canMove() ? 'block' : 'none' })} @click="${this.sendEvent('move')}">Move</button>
                <button style=${styleMap({display: this.unit?.canAttack() ? 'block' : 'none' })} @click="${this.sendEvent('attack')}">Attack</button>
                <button  @click="${this.sendEvent('pass')}">Pass</button>
            </div>
        </div>
        `
    }
}