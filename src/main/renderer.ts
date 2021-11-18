import { CustomElement, TriggerCSSClassWithMouse } from '../core/dom'
import { channels } from '../types'
import './index.css'

const { ipcRendererSend, ipcRendererOn } = window.mainWinContext

new CustomElement('btn-new-chat')
    .handleClick(() => ipcRendererSend(channels.OPEN_ADDITIONAL_WINDOW))

const aside = new TriggerCSSClassWithMouse('aside', 'active')
new TriggerCSSClassWithMouse('nav-section', 'active', aside)

ipcRendererOn(channels.TRANSFER_CHAT_MESSAGE_TO_WINDOWS, (message: string) => {
    window.dispatchEvent(new CustomEvent("get-chat-message", {
        detail: { message },
        bubbles: true,
        composed: true
    }))
})

window.addEventListener("send-chat-message", (e) => {
    const { message } = (<CustomEvent<{message:string}>>e).detail
    console.log(message)
    ipcRendererSend(channels.SEND_CHAT_MESSAGE_TO_MAIN_PROCESS, message)
});
