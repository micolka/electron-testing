import { ipcRenderer, contextBridge } from 'electron';
import { channels } from '../types';

const ipcRendererOn = <T>(chanel: channels, callback: (data: T) => void) => {
  const newCallBack = (_: Electron.IpcRendererEvent, data: T) => callback(data);
  ipcRenderer.on(chanel, newCallBack)
}

const ipcRendererSend = <T>(chanel: channels, data?: T) => {
ipcRenderer.send(chanel, data);
}

contextBridge.exposeInMainWorld(
  'mainWinContext', {
    ipcRendererOn,
    ipcRendererSend,
  }
)

declare global {
  interface Window {
    mainWinContext: {
      ipcRendererOn: typeof ipcRendererOn,
      ipcRendererSend: typeof ipcRendererSend,
    }
  }
}
