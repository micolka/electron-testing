import { CustomElement } from "../../core/dom"
import { channels } from "../../types"

const { ipcRendererOn } = window.secondWinContext
const caption = new CustomElement('caption') 

ipcRendererOn(channels.TRANSFER_DATA_FROM_MAIN, (arg: string) => {
  caption.setInnerText(arg)
})
