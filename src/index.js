// console.log('index.js');
import './main.scss';
import { appComponent } from './components/appComponent';
import { textareaComponent } from './components/textareaComponent';
import { keyboardComponent } from './components/keyboardComponent';
import { footerComponent } from './components/footerComponent';

import { keyLayout, keyLayoutNumber} from './data/keysData';
console.log( keyLayout);



import { setKeys } from './core/setKeys';

import { appendElemToDOM } from './helpers/appendElemToDOM';

const app = appComponent();
const textarea = textareaComponent();
const keyboard = keyboardComponent();
const footer = footerComponent();

appendElemToDOM(document.body, [app]);
appendElemToDOM(app, [textarea, keyboard, footer]);

setKeys(keyLayout, keyLayoutNumber)
