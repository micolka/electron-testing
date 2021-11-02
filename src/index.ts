import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    minHeight: 400,
    minWidth: 400,
    webPreferences: {
      preload: path.join(__dirname, 'main/preload.js')
    }
  });

  // mainWindow.loadFile(path.join(__dirname, 'main/index.html'));
  mainWindow.loadFile('src/main/index.html');

  // mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('open-additioonal-window', () => {

  const secondWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'second/preload.js')
    }
  })
  
  secondWindow.loadFile('src/second/second.html')
  
  // secondWindow.webContents.openDevTools()

  const dataListener = (event: Electron.IpcMainEvent, arg: string) => {
    secondWindow.webContents.send('transfer-data-from-main', arg)
  }

  ipcMain.on('transfer-input-data', dataListener);

  secondWindow.on('close', () => {
    ipcMain.removeListener('transfer-input-data', dataListener);
  })
});
