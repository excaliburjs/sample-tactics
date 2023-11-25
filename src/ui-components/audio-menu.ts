import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators";
import { AudioManager } from "../audio-manager";

@customElement('audio-menu')
export class AudioMenu extends LitElement {
    static styles = css`
        :host {
            position: absolute;
            left: 0;
            bottom: 0;
            margin: 16px;
        }
        button {
            all: unset;
            cursor: pointer;
            color: white;
            font-size: 32px;
        }
        .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -moz-font-feature-settings: 'liga';
            -moz-osx-font-smoothing: grayscale;
        }
    `

    @property()
    soundOn = true;

    toggleSound() {
        this.soundOn = !this.soundOn;
        AudioManager.toggleMute(!this.soundOn);
    }

    override render() {
        // material symbols
        // https://fonts.google.com/icons?selected=Material+Symbols+Outlined:volume_off:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=speaker
        return this.soundOn ? 
            html`<button @click=${this.toggleSound} class="material-symbols-outlined">volume_up</button>` :
            html`<button @click=${this.toggleSound} class="material-symbols-outlined">volume_off</button>`
    }
}