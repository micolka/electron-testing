// const { ipcRenderer, contextBridge } = require('electron');
import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld(
    'mainWinContext', {
        sendInputData: (arg: string) => ipcRenderer.send('transfer-input-data', arg),
        openAddWin: () => ipcRenderer.send('open-additioonal-window'),
    }
)

declare global {
    interface Window {
        mainWinContext: any
    }
}
