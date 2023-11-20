import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators'
import {styleMap} from 'lit/directives/style-map'
import {classMap} from 'lit/directives/class-map'

@customElement('unit-menu')
export class UnitMenu extends LitElement {
    static override styles = css`
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(100%);
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
                transform: translateY(0%);
            }
        }



        .menu {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            display: none;
            flex-direction: column;
            font-size: 32px;
            background-color: rgba(240, 220, 220, 1);

            border: black 5px solid;
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
            animation: fadeIn 200ms ease normal;
        }
                
        .options {
            display: flex;
            flex-direction: column;
            
        }

        .title-bar {
            background-color: red;
            width: 100%;
            height: 20px;
        }

        button {
            all: unset;
            padding: 4px;
            padding-left: 16px;
            cursor: pointer;
        }

        button:focus, button:hover {
            background-color: rgba(220, 200, 200, 1);
        }

        button:active {
            background-color: rgba(250, 240, 240, 1);
        }
    `

    @property({type: Number})
    left: number = 0;

    @property({type: Number})
    top: number = 0;

    @property({type: Boolean})
    show: boolean = false;

    sendEvent(type: string) {
        return () => {
            this.dispatchEvent(new Event(type))
            this.show = false;
            this.requestUpdate();
        }
    }

    hide() {
        this.show = false;
    }

    override render() {
        const dismissOverlayHtml = this.show ? html`<div class="overlay" @click=${this.hide}></div>` : nothing;

        return html`
        ${dismissOverlayHtml}
        <div class=${classMap({
            menu: true,
            show: this.show
        })} style=${styleMap({
            left: `${this.left}px`, 
            top: `${this.top}px`
        })}>
            <div class="title-bar"></div>
            <div class="options">
                <button @click="${this.sendEvent('move')}">Move</button>
                <button @click="${this.sendEvent('attack')}">Attack</button>
                <button @click="${this.sendEvent('pass')}">Pass</button>
            </div>
        </div>
        `
    }
}