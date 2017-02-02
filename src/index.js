import { app, BrowserWindow } from 'electron';

// app.commandLine.appendSwitch('disable-smooth-scrolling');

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
			width: 600,
			height: 800
		});
	
	mainWindow.loadURL(`file://${__dirname}/html/index.html`);
	
	mainWindow.webContents.openDevTools();
	
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
