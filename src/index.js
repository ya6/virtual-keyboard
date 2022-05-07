import './main.scss';

import { app } from './components/appElement';
import { textarea } from './components/textareaElement';
import { keyboard } from './components/keyboardElement';
import { footer } from './components/footerElement';

import { keyLayout } from './data/keysData';

import { keysLayoutComponent } from './components/keysLayoutComponent';

import { appendElemToDOM } from './helpers/appendElemToDOM';
import { delElemFromDOM } from './helpers/delElemFromDOM';
import { findAndAddClass } from './helpers/findAndAddClass';
import { findAndRemoveClass } from './helpers/findAndRemoveClass';
import { insertToTextarea } from './helpers/insertToTextarea';

// INIT

let layout = { lang: 'en', number: 0 };

appendElemToDOM(document.body, app);
appendElemToDOM(app, [textarea, keyboard, footer]);

let keysContainer = keysLayoutComponent(
  keyLayout,
  layout.number
);

appendElemToDOM(keyboard, keysContainer);

// HANDLERS
const keypressHandler = (e) => {
  if (e.keyCode) {
    textarea.focus();
    const el = document.querySelector(
      `[data-name="${e.key}"]`
    );
    el.classList.add('virtual__key--pressed');
    setTimeout(() => {
      el.classList.remove('virtual__key--pressed');
    }, 400);
  }
};

const keydownHandler = (e) => {
  const currentKey = e.code;
  switch (currentKey) {
    case 'ShiftLeft':
      if (layout.number === 1) {
        break;
      }
      if (layout.number === 0) {
        layout.number = 1;
      }
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number
      );
      appendElemToDOM(keyboard, keysContainer);
      findAndAddClass(' Shift ');
      break;

    case 'ShiftRight':
      if (layout.number === 1) {
        break;
      }
      if (layout.number === 0) {
        layout.number = 1;
      }
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number
      );
      appendElemToDOM(keyboard, keysContainer);
      findAndAddClass('Shift');
      break;

    case 'CapsLock':
      if (layout.number === 1) {
        layout.number = 0;
      } else if (layout.number === 0) {
        layout.number = 1;
      }
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number
      );
      appendElemToDOM(keyboard, keysContainer);
      findAndAddClass('Caps Lock');
      break;

    case 'ControlLeft':
      findAndAddClass(' Ctrl ');
      break;

    case 'ControlRight':
      findAndAddClass('Ctrl');
      break;

    case 'Tab':
      findAndAddClass('Tab');
      break;

    case 'AltLeft':
      findAndAddClass(' Alt ');
      break;

    case 'AltRight':
      findAndAddClass('Alt');
      break;

    case 'Backspace':
      findAndAddClass('Back&thinsp;space');
      break;

    case 'Delete':
      findAndAddClass('Del');
      break;

    case 'Enter':
      findAndAddClass('Enter');
      break;

    default:
      break;
  }
};
const keyupHandler = (e) => {
  const currentKey = e.code;
  switch (currentKey) {
    case 'ShiftLeft':
      if (layout.number === 1) {
        layout.number = 0;
      }
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number
      );
      appendElemToDOM(keyboard, keysContainer);
      break;

    case 'ShiftRight':
      layout.number = layout.lang = 'en' ? 0 : 2;
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number
      );
      appendElemToDOM(keyboard, keysContainer);
      break;

    case 'CapsLock':
      findAndRemoveClass('Caps Lock');
      break;

    case 'ControlLeft':
      findAndRemoveClass(' Ctrl ');
      break;

    case 'ControlRight':
      findAndRemoveClass('Ctrl');
      break;

    case 'Tab':
      findAndRemoveClass('Tab');
      break;

    case 'AltLeft':
      findAndRemoveClass(' Alt ');
      break;

    case 'AltRight':
      findAndRemoveClass('Alt');
      break;

    case 'Backspace':
      findAndRemoveClass('Back&thinsp;space');
      break;

    case 'Delete':
      findAndRemoveClass('Del');
      break;
    case 'Enter':
      findAndRemoveClass('Enter');
      break;

    default:
      break;
  }
};

const clickHandler = (e) => {
  let currentKey = e.target.dataset.name;
  if (e.target.tagName !== 'BUTTON') {
    textarea.focus();
    return;
  }

  switch (currentKey) {
    case ' Shift ':
      if (layout.number === 0) {
        layout.number = 1;
      } else if (layout.number === 1) {
        layout.number = 0;
      }
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number
      );
      appendElemToDOM(keyboard, keysContainer);
      const el = document.querySelector(
        `[data-name=" Shift "]`
      );
      if (layout.number == 1 || layout.number == 3) {
        el.classList.add('virtual__key--permanent-pressed');
      }
      break;

    case 'Shift':
      if (layout.number === 0) {
        layout.number = 1;
      } else if (layout.number === 1) {
        layout.number = 0;
      }
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number
      );
      appendElemToDOM(keyboard, keysContainer);
      const el1 = document.querySelector(
        `[data-name="Shift"]`
      );
      if (layout.number == 1 || layout.number == 3) {
        el1.classList.add(
          'virtual__key--permanent-pressed'
        );
      }
      break;

    case 'Caps Lock':
      if (layout.number === 0) {
        layout.number = 1;
      } else if (layout.number === 1) {
        layout.number = 0;
      }
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number
      );
      appendElemToDOM(keyboard, keysContainer);
      break;

    case 'Tab':
      currentKey = `\t`;
      insertToTextarea(textarea, currentKey);
      break;

    case 'Enter':
      currentKey = `\r\n`;
      insertToTextarea(textarea, currentKey);
      break;

    case '&#9668': //left
      if (textarea.selectionStart > 0) {
        textarea.setSelectionRange(
          textarea.selectionStart - 1,
          textarea.selectionStart - 1
        );
      }

      break;
    case '&#9658':
      textarea.setSelectionRange(
        textarea.selectionStart + 1,
        textarea.selectionStart + 1
      );
      break;

    case '&#9650':
      insertToTextarea(textarea, '▲');
      break;

    case '&#9660':
      insertToTextarea(textarea, '▼');
      break;

    case 'Back&thinsp;space':
      let newValue = textarea.value;
      let startPosition = textarea.selectionStart;
      let endPosition = textarea.selectionEnd;

      let currentValueLeft = newValue.slice(
        0,
        startPosition
      );
      let currentValueRight = newValue.slice(
        endPosition,
        newValue.length
      );
      if (startPosition === endPosition) {
        currentValueLeft = currentValueLeft.slice(
          0,
          currentValueLeft.length - 1
        );
        textarea.value =
          currentValueLeft + currentValueRight;
        textarea.setSelectionRange(
          startPosition - 1,
          startPosition - 1
        );
      } else {
        textarea.value =
          currentValueLeft + currentValueRight;
        textarea.setSelectionRange(
          startPosition,
          startPosition
        );
      }

      textarea.setSelectionRange(
        startPosition - 1,
        startPosition - 1
      );

      break;

    case 'Del':
      let newValue1 = textarea.value;
      let startPosition1 = textarea.selectionStart;
      let endPosition1 = textarea.selectionEnd;

      let currentValueLeft1 = newValue1.slice(
        0,
        startPosition1
      );
      let currentValueRight1 = newValue1.slice(
        endPosition1,
        newValue1.length
      );

      if (startPosition1 === endPosition1) {
        currentValueRight1 = currentValueRight1.slice(
          1,
          currentValueRight1.length
        );
        textarea.value =
          currentValueLeft1 + currentValueRight1;
      } else {
        textarea.value =
          currentValueLeft1 + currentValueRight1;
      }

      textarea.setSelectionRange(
        startPosition1,
        startPosition1
      );

      break;

    default:
      insertToTextarea(textarea, currentKey);
      break;
  }

  textarea.focus();
};

const mousedownHandler = (e) => {};

const mouseupHandler = (e) => {};

// EVENTS
document.body.addEventListener('keypress', keypressHandler);

document.body.addEventListener('keydown', keydownHandler);
document.body.addEventListener('keyup', keyupHandler);

keyboard.addEventListener('click', clickHandler);
keyboard.addEventListener('mousedown', mousedownHandler);
keyboard.addEventListener('mouseup', mouseupHandler);
