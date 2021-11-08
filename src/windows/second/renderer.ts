import { CustomElement } from "../../dom/html"
import { channels } from "../../types"

const { ipcRendererOn } = window.secondWinContext

ipcRendererOn(channels.TRANSFER_DATA_FROM_MAIN, (arg: string) => {
  new CustomElement('caption').setInnerText(arg)
})
