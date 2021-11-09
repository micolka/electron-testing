import { CustomElement, TriggerCSSClassWithMouse } from '../../core/dom';
import { channels } from '../../types';
import './index.css';

const { ipcRendererSend } = window.mainWinContext

new CustomElement('btn-send')
    .handleClick(() => ipcRendererSend(channels.OPEN_ADDITIONAL_WINDOW))

new CustomElement('input')
    .handleInput((e) => ipcRendererSend(channels.TRANSFER_INPUT_DATA, (<HTMLInputElement>e.target).value))

const aside = new TriggerCSSClassWithMouse('aside', 'active')
new TriggerCSSClassWithMouse('nav-section', 'active', aside)
