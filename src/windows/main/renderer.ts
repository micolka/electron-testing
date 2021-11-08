import { CustomElement, TriggerCSSClassWithMouse } from '../../dom/html';
import { channels } from '../../types';
import './index.css';

const { ipcRendererSend } = window.mainWinContext

new CustomElement('btn-send')
    .addListener('click', () => ipcRendererSend(channels.OPEN_ADDITIONAL_WINDOW))

new CustomElement('input')
    .addListener('input', (e) => ipcRendererSend(channels.TRANSFER_INPUT_DATA, (<HTMLInputElement>e.target).value))

const aside = new TriggerCSSClassWithMouse('aside', 'active')
new TriggerCSSClassWithMouse('nav-section', 'active', aside)
