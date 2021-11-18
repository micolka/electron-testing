import { CustomElement } from "../../core/dom"
import { ElectronChat } from "../../core/chat"
import { channels } from "../../types"
import './index.css';

const { ipcRendererOn, ipcRendererSend } = window.secondWinContext
const chat = new ElectronChat('messages')

const caption = new CustomElement('caption') 
ipcRendererOn(channels.TRANSFER_DATA_FROM_MAIN, (data: string) => {
  caption.setInnerText(data)
})

ipcRendererOn(channels.TRANSFER_CHAT_MESSAGE_TO_WINDOWS, (message: string) => {
  chat.getMessage(message)
})

const inputMessage = new CustomElement('input-message') 
new CustomElement('send-message')
  .handleClick(() => {   
    ipcRendererSend(channels.SEND_CHAT_MESSAGE_TO_MAIN_PROCESS, inputMessage.getValue())
    chat.sendMessage(inputMessage.getValue())
  })
