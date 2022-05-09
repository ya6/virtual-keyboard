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
import { defaultFindAndAddClass } from './helpers/defaultFindAndAddClass';
import { findAndRemoveClass } from './helpers/findAndRemoveClass';
import { defaultFindAndRemoveClass } from './helpers/defaultFindAndRemoveClass';

import { insertToTextarea } from './helpers/insertToTextarea';

// INIT
const layout = {
  lang: 'en',
  number: 0,
  leftShift: 0,
  rightShift: 0,
  capsLock: 0,
  leftCtrl: 0,
  rightCtrl: 0,
  leftAlt: 0,
  rightAlt: 0,
  leftCtrlAlt: 0,
};

if (
  window.localStorage.getItem('lang') === null
  && window.localStorage.getItem('number') === null
) {
  const { lang, number } = layout;
  window.localStorage.setItem('lang', lang);
  window.localStorage.setItem('number', number);
} else {
  layout.lang = window.localStorage.getItem('lang');
  layout.number = +window.localStorage.getItem('number');
}

appendElemToDOM(document.body, app);
appendElemToDOM(app, [textarea, keyboard, footer]);

let keysContainer = keysLayoutComponent(
  keyLayout,
  layout.number,
);

appendElemToDOM(keyboard, keysContainer);

// HANDLERS
const keypressHandler = () => {
  textarea.focus();
};

const keydownHandler = (e) => {
  const currentKey = e.code;
console.log(currentKey);
  switch (currentKey) {
    case 'ShiftLeft':
      if (layout.leftShift === 1) {
        break;
      }
      if (layout.rightShift === 1) {
        break;
      }

      switch (layout.number) {
        case 0:
          layout.number = 1;
          break;
        case 1:
          layout.number = 0;
          break;
        case 2:
          layout.number = 3;
          break;

        case 3:
          layout.number = 2;
          break;

        default:
          break;
      }
      layout.leftShift = 1;

      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number,
      );
      appendElemToDOM(keyboard, keysContainer);
      findAndAddClass(' Shift ');
      break;

    case 'ShiftRight':
      if (layout.rightShift === 1) {
        break;
      }
      if (layout.leftShift === 1) {
        break;
      }
      switch (layout.number) {
        case 0:
          layout.number = 1;
          break;
        case 1:
          layout.number = 0;
          break;
        case 2:
          layout.number = 3;
          break;

        case 3:
          layout.number = 2;
          break;

        default:
          break;
      }
      layout.rightShift = 1;
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number,
      );
      appendElemToDOM(keyboard, keysContainer);
      findAndAddClass('Shift');
      break;

    case 'CapsLock':
      if (layout.capsLock === 1) {
        break;
      }
      switch (layout.number) {
        case 0:
          layout.number = 1;
          break;
        case 1:
          layout.number = 0;
          break;
        case 2:
          layout.number = 3;
          break;

        case 3:
          layout.number = 2;
          break;

        default:
          break;
      }

      layout.capsLock = 1;
      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number,
      );
      appendElemToDOM(keyboard, keysContainer);
      findAndAddClass('Caps Lock');
      break;

    case 'ControlLeft':
      if (layout.leftCtrl === 1) {
        break;
      }
      layout.leftCtrl = 1;
      findAndAddClass(' Ctrl ');
      break;

    case 'ControlRight':
      if (layout.rightCtrl === 1) {
        break;
      }
      layout.rightCtrl = 1;
      findAndAddClass('Ctrl');
      break;

    case 'Tab':
      findAndAddClass('Tab');
      break;

    case 'AltLeft':
      if (layout.leftAlt === 1) {
        break;
      }
      layout.leftAlt = 1;
      findAndAddClass(' Alt ');
      break;

    case 'AltRight':
      if (layout.rightAlt === 1) {
        break;
      }
      layout.rightAlt = 1;
      findAndAddClass('Alt');
      break;

    case 'Backspace':
      findAndAddClass('Back space');
      break;

    case 'Delete':
      findAndAddClass('Del');
      break;

    case 'Enter':
      findAndAddClass('Enter');
      break;

    case 'ArrowUp':
      findAndAddClass('▲');
      break;

    case 'ArrowDown':
      findAndAddClass('▼');
      break;

    case 'ArrowLeft':
      findAndAddClass('◄');
      break;

    case 'Backslash':
      defaultFindAndAddClass('|');
      break;

    case 'Space':
      findAndAddClass(' ');
      break;

    case 'Slash':
      defaultFindAndAddClass('?');
      break;

    default:
      defaultFindAndAddClass(e.key);
      break;
  }

  if (e.code === 'ControlLeft' || e.code === 'AltLeft') {
    if (e.altKey && e.ctrlKey) {
      layout.leftCtrlAlt = 1;
    }
  }
};

const keyupHandler = (e) => {
  const currentKey = e.code;
  // const currentEngKey = currentKey[currentKey.length - 1].toLowerCase();
  switch (currentKey) {
    case 'ShiftLeft':
      layout.leftShift = 0;
      layout.leftCtrlAlt = 0;

      switch (layout.number) {
        case 0:
          layout.number = 1;
          break;
        case 1:
          layout.number = 0;
          break;
        case 2:
          layout.number = 3;
          break;

        case 3:
          layout.number = 2;
          break;

        default:
          break;
      }

      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number,
      );
      appendElemToDOM(keyboard, keysContainer);
      break;

    case 'ShiftRight':
      layout.rightShift = 0;

      switch (layout.number) {
        case 0:
          layout.number = 1;
          break;
        case 1:
          layout.number = 0;
          break;
        case 2:
          layout.number = 3;
          break;

        case 3:
          layout.number = 2;
          break;

        default:
          break;
      }

      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number,
      );
      appendElemToDOM(keyboard, keysContainer);
      break;

    case 'CapsLock':
      layout.capsLock = 0;
      findAndRemoveClass('Caps Lock');
      break;

    case 'ControlLeft':
      layout.leftCtrl = 0;
      findAndRemoveClass(' Ctrl ');

      if (layout.leftCtrlAlt === 1) {
        layout.leftCtrlAlt = 0;

        layout.lang = layout.lang === 'en' ? 'ru' : 'en';
        switch (layout.number) {
          case 0:
            layout.number = 2;
            break;
          case 2:
            layout.number = 0;
            break;
          case 1:
            layout.number = 3;
            break;

          case 3:
            layout.number = 1;
            break;

          default:
            break;
        }

        delElemFromDOM(keysContainer);
        keysContainer = keysLayoutComponent(
          keyLayout,
          layout.number,
        );
        appendElemToDOM(keyboard, keysContainer);

        if (layout.rightShift === 1) {
          document
            .querySelector('[data-name="Shift"]')
            .classList.add('virtual__key--permanent-pressed');
        }
        if (layout.leftShift === 1) {
          document
            .querySelector('[data-name=" Shift "]')
            .classList.add('virtual__key--permanent-pressed');
        }

        const { lang, number } = layout;
        window.localStorage.setItem('lang', lang);
        window.localStorage.setItem('number', number);
      }

      break;

    case 'ControlRight':
      layout.rightCtrl = 0;
      findAndRemoveClass('Ctrl');
      break;

    case 'Tab':
      findAndRemoveClass('Tab');
      break;

    case 'AltLeft':
      layout.leftAlt = 0;
      findAndRemoveClass(' Alt ');
      break;

    case 'AltRight':
      layout.rightAlt = 0;
      findAndRemoveClass('Alt');
      break;

    case 'Backspace':
      findAndRemoveClass('Back space');
      break;

    case 'Delete':
      findAndRemoveClass('Del');
      break;
    case 'Enter':
      findAndRemoveClass('Enter');
      break;

    case 'ArrowUp':
      findAndRemoveClass('▲');
      break;

    case 'ArrowDown':
      findAndRemoveClass('▼');
      break;

    case 'ArrowLeft':
      findAndRemoveClass('◄');
      break;

    case 'ArrowRight':
      findAndRemoveClass('►');
      break;

    case 'Backslash':
      defaultFindAndRemoveClass('|');
      break;

    case 'Space':
      findAndRemoveClass(' ');
      break;

    case 'Slash':
      defaultFindAndRemoveClass('?');
      break;

    default:
      defaultFindAndRemoveClass(e.key);
      break;
  }
};

const clickHandler = (e) => {
  let currentKey = e.target.dataset.name;
  if (e.target.tagName !== 'BUTTON') {
    textarea.focus();
    return;
  }

  const newValue = textarea.value;
  const startPosition = textarea.selectionStart;
  const endPosition = textarea.selectionEnd;

  let currentValueLeft = newValue.slice(
    0,
    startPosition,
  );
  let currentValueRight = newValue.slice(
    endPosition,
    newValue.length,
  );

  switch (currentKey) {
    case ' Shift ':
      switch (layout.number) {
        case 0:
          layout.number = 1;

          break;
        case 1:
          layout.number = 0;

          break;

        case 2:
          layout.number = 3;
          break;

        case 3:
          layout.number = 2;
          break;

        default:
          break;
      }

      layout.leftShift = layout.leftShift === 1 ? 0 : 1;
      if (layout.leftShift === 1) {
        layout.rightShift = 0;
      }

      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number,
      );
      appendElemToDOM(keyboard, keysContainer);

      if (layout.leftShift === 1) {
        document
          .querySelector('[data-name=" Shift "]')
          .classList.add('virtual__key--permanent-pressed');
      }
      break;

    case 'Shift':
      switch (layout.number) {
        case 0:
          layout.number = 1;

          break;
        case 1:
          layout.number = 0;
          break;

        case 2:
          layout.number = 3;
          break;

        case 3:
          layout.number = 2;
          break;

        default:
          break;
      }

      layout.rightShift = layout.rightShift === 1 ? 0 : 1;
      if (layout.rightShift === 1) {
        layout.leftShift = 0;
      }

      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number,
      );
      appendElemToDOM(keyboard, keysContainer);

      if (layout.rightShift === 1) {
        document
          .querySelector('[data-name="Shift"]')
          .classList.add('virtual__key--permanent-pressed');
      }
      break;

    case 'Caps Lock':
      switch (layout.number) {
        case 0:
          layout.number = 1;

          break;
        case 1:
          layout.number = 0;
          break;

        case 2:
          layout.number = 3;
          break;

        case 3:
          layout.number = 2;
          break;

        default:
          break;
      }

      delElemFromDOM(keysContainer);
      keysContainer = keysLayoutComponent(
        keyLayout,
        layout.number,
      );
      appendElemToDOM(keyboard, keysContainer);
      if (layout.leftShift === 1) {
        document
          .querySelector('[data-name=" Shift "]')
          .classList.add('virtual__key--permanent-pressed');
      }
      if (layout.rightShift === 1) {
        document
          .querySelector('[data-name="Shift"]')
          .classList.add('virtual__key--permanent-pressed');
      }
      break;

    case 'Tab':
      currentKey = '\t';
      insertToTextarea(textarea, currentKey);
      break;

    case 'Enter':
      currentKey = '\r\n';
      insertToTextarea(textarea, currentKey);
      break;

    case '◄':
      if (textarea.selectionStart > 0) {
        textarea.setSelectionRange(
          textarea.selectionStart - 1,
          textarea.selectionStart - 1,
        );
      }

      break;
    case '►':
      textarea.setSelectionRange(
        textarea.selectionStart + 1,
        textarea.selectionStart + 1,
      );
      break;

    case '▲':
      insertToTextarea(textarea, '▲');
      break;

    case '▼':
      insertToTextarea(textarea, '▼');
      break;

    case 'Back space':
      if (startPosition === endPosition) {
        currentValueLeft = currentValueLeft.slice(
          0,
          currentValueLeft.length - 1,
        );
        textarea.value = currentValueLeft + currentValueRight;
        textarea.setSelectionRange(
          startPosition - 1,
          startPosition - 1,
        );
      } else {
        textarea.value = currentValueLeft + currentValueRight;
        textarea.setSelectionRange(
          startPosition,
          startPosition,
        );
      }

      break;

    case 'Del':

      if (startPosition === endPosition) {
        currentValueRight = currentValueRight.slice(
          1,
          currentValueRight.length,
        );
        textarea.value = currentValueLeft + currentValueRight;
      } else {
        textarea.value = currentValueLeft + currentValueRight;
      }

      textarea.setSelectionRange(
        startPosition,
        startPosition,
      );

      break;

    case ' Alt ':
      break;

    case 'Alt':
      break;

    case 'Win':
      break;

    case ' Ctrl ':
      break;

    case 'Ctrl':
      break;

    default:
      insertToTextarea(textarea, currentKey);
      break;
  }

  textarea.focus();
};

// EVENTS
document.body.addEventListener('keypress', keypressHandler);
document.body.addEventListener('keydown', keydownHandler);
document.body.addEventListener('keyup', keyupHandler);

keyboard.addEventListener('click', clickHandler);
