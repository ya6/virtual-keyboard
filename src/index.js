// console.log('index.js');
import './main.scss';
import { appComponent } from './components/appComponent';
import { textareaComponent } from './components/textareaComponent';
import { appendElemToDOM } from './helpers/appendElemToDOM';

const app = appComponent();
const textarea = textareaComponent();

appendElemToDOM(document.body, app);
appendElemToDOM(app, textarea);
