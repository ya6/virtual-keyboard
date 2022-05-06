import './main.scss';

import { app } from './components/appElement';
import { textarea } from './components/textareaElement';
import { keyboard } from './components/keyboardElement';
import { footer } from './components/footerElement';

import { keyLayout } from './data/keysData';

import { keysLayoutComponent } from './components/keysLayoutComponent';

import { appendElemToDOM } from './helpers/appendElemToDOM';
import { replaceElemToDOM } from './helpers/replaceElemToDOM';

// INIT
appendElemToDOM(document.body, app);
appendElemToDOM(app, [textarea, keyboard, footer]);

let keysContainer = keysLayoutComponent(keyLayout, 0);

appendElemToDOM(keyboard, keysContainer);

// replaceElemToDOM(
//   keyboard,
//   keysContainer,
//   keysLayoutComponent(keyLayout, 3)
// );

// HANDLERS
const keypressHandler = (e) => {
  console.log('keypressHandler');
  if (e.keyCode) {
    textarea.focus();
    if (textarea.value === '') {
      textarea.value = e.key;
    }
    const el = document.querySelector(
      `[data-name="${e.key}"]`
    );
    el.classList.add('virtual__key--pressed');
    //  console.log(el);
    setTimeout(() => {
      el.classList.remove('virtual__key--pressed');
    }, 400);
  }
};
const keydownHandler = (e) => {
  // console.log(e);
};
const keyupHandler = (e) => {
  // console.log(e);
};

const clickHandler = (e) => {
  console.log('clickHandler');
  // console.log(textarea.selectionStart);
  if (e.target.tagName !== 'BUTTON') {
    textarea.focus();
    return;
  }

//anim

  textarea.focus();
  const currentValue = textarea.value;
  const currentPosition = textarea.selectionStart;

  const currentValueLeft = currentValue.slice(
    0,
    currentPosition
  );
  const currentValueRight = currentValue.slice(
    currentPosition,
    currentValue.length
  );
  // console.log(`${currentValueLeft}---${currentValueRight}`);
  textarea.value =
    currentValueLeft +
    e.target.dataset.name +
    currentValueRight;
  textarea.setSelectionRange(
    currentPosition + 1,
    currentPosition + 1
  );
  // console.log(textarea.selectionStart);
};

// EVENTS
document.body.addEventListener('keypress', keypressHandler);

document.body.addEventListener('keydown', keydownHandler);
document.body.addEventListener('keyup', keyupHandler);

keysContainer.addEventListener('click', clickHandler);
