import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld(
    'secondWinContext', {
        getData: (caption: HTMLElement) => ipcRenderer.on('transfer-data-from-main', (_, arg: string) => {
            caption.innerText = arg
        })
    }
)

declare global {
    interface Window {
        secondWinContext: any
    }
}
