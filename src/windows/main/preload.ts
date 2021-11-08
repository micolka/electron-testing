import { ipcRenderer, contextBridge } from 'electron';
import { channels } from '../../types';

const ipcRendererSend = <T>(chanell: channels, data?: T) => {
    ipcRenderer.send(chanell, data);
}

contextBridge.exposeInMainWorld(
  'mainWinContext', {
    ipcRendererSend,
  }
)

declare global {
  interface Window {
    mainWinContext: {
        ipcRendererSend: typeof ipcRendererSend
    }
  }
}
