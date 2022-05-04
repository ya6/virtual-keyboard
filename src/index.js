// console.log('index.js');
import {appComponent} from './components/appComponent'
import {appendElemToDOM} from './helpers/appendElemToDOM'


appendElemToDOM(document.body, appComponent())


