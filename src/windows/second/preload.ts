import { ipcRenderer, contextBridge } from 'electron';
import { channels } from '../../types';

const ipcRendererOn = <T>(chanell: channels, callback: (data: T) => void) => {
    const newCallBack = (_: Electron.IpcRendererEvent, data: T) => callback(data);
    ipcRenderer.on(chanell, newCallBack)
}

contextBridge.exposeInMainWorld(
  'secondWinContext', {
    ipcRendererOn,
  }
)

declare global {
  interface Window {
    secondWinContext: {
      ipcRendererOn: typeof ipcRendererOn,
    }
  }
}
