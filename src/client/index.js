import { h, render } from 'preact';
import App from './components/app/app';

render(h(App), document.getElementById('root'));

console.log('hydrated!');