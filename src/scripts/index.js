import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './components/header/header';
import './components/footer/footer';
import './components/Hero';
import './components/About';
import './components/Menu';
import './components/Team';
import './components/Error';
import './components/loader-indicator';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
