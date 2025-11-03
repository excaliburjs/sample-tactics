import * as ex from 'excalibur';
import ArthurPortrait from '../../res/Arthur.png';

import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators'
import {styleMap} from 'lit/directives/style-map'
import {classMap} from 'lit/directives/class-map'

@customElement('dialog-box')
export class DialogBox extends LitElement {
    static override styles = css`
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-10%);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0%);
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0%);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-10%);
            }
        }

        .menu {
            position: absolute;
            top: calc(4px * var(--pixel-conversion));
            left: 50%;
            transform: translateX(-50%);
            width: calc(160px * var(--pixel-conversion));
            display: none;
            opacity: 0;
            font-size: calc(8px * var(--pixel-conversion));
            background-color: #F2CB91;
            gap: calc(4px * var(--pixel-conversion));

            border: #E2A360 calc(1px * var(--pixel-conversion)) solid;
            padding: calc(2px * var(--pixel-conversion));
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
        
        .portrait{
            image-rendering: pixelated;
            width: calc(64px * var(--pixel-conversion));
            height: calc(64px * var(--pixel-conversion));
            border: #E2A360 calc(1px * var(--pixel-conversion)) solid;
        }

        .stack {
            display: flex;
            flex-direction: column;
        }
        
        .title-bar {
            height: calc(7px * var(--pixel-conversion));
            padding: calc(2px * var(--pixel-conversion));
            border-bottom: #E2A360 calc(1px * var(--pixel-conversion)) solid;
        }
        
        .sentence {
            padding: calc(2px * var(--pixel-conversion));
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
    text: string | null = null;

    @property({attribute: false})
    speaker: string | null = "Arthur";

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
        })}>            
            <img src="${ArthurPortrait}" class="portrait"/>
            <div class="stack">
                <div class="title-bar">${this.speaker}</div>
                <div class="sentence">${this.text}</div>
            </div>
        </div>
        `
    }
}