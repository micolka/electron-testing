import { channels } from "../types"

const { ipcRendererOn } = window.secondWinContext

const caption = document.getElementById('caption')

ipcRendererOn(channels.TRANSFER_DATA_FROM_MAIN, (arg: string) => {
  caption.innerText = arg
})
