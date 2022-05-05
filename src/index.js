// console.log('index.js');
import './main.scss';
import { app } from './components/appElement';
import { textarea } from './components/textareaElement';
import { keyboard } from './components/keyboardElement';
import { footer } from './components/footerElement';

import {
  keyLayout,
  keyLayoutNumber,
} from './data/keysData';

import { keysLayoutComponent } from './components/keysLayoutComponent';

import { appendElemToDOM } from './helpers/appendElemToDOM';


appendElemToDOM(document.body, app);
appendElemToDOM(app, [textarea, keyboard, footer]);

const keysContainer = keysLayoutComponent(
  keyLayout,
  keyLayoutNumber
);

appendElemToDOM(keyboard, keysContainer);
