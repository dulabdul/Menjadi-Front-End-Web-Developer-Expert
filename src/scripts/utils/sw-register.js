import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker Not Supported Browser');
    return;
  }
  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
  try {
    await wb.register();
    console.log('Service Worker Success Installed');
  } catch (error) {
    console.log('Service Worker  Not Success Installed', error);
  }
};

export default swRegister;
