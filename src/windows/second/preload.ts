import { ipcRenderer, contextBridge } from 'electron';
import { channels } from '../../types';

const ipcRendererOn = <T>(chanell: channels, callback: (data: T) => void) => {
    const newCallBack = (_: Electron.IpcRendererEvent, data: T) => callback(data);
    ipcRenderer.on(chanell, newCallBack)
}

const ipcRendererSend = <T>(chanell: channels, data?: T) => {
  ipcRenderer.send(chanell, data);
}

contextBridge.exposeInMainWorld(
  'secondWinContext', {
    ipcRendererOn,
    ipcRendererSend,
  }
)

declare global {
  interface Window {
    secondWinContext: {
      ipcRendererOn: typeof ipcRendererOn,
      ipcRendererSend: typeof ipcRendererSend,
    }
  }
}
