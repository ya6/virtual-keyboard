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
  // console.log('keypressHandler', e);
  if (e.keyCode) {
    textarea.focus();
    // if (textarea.value === '') {
    //   textarea.value = e.key;
    // }
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

  console.log(e);
  console.log(currentKey);

  // console.log('->',e.code);
  // console.log('-->', e.keyCode);
  // console.log('-->', e.key);
  // console.log('-->', e.charCode);
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
      findAndRemoveClass( ' Alt ');
      break;

    case 'AltRight':
      findAndRemoveClass('Alt');
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

  if (currentKey.length > 1 && currentKey!='Tab') {
    switch (
      currentKey //special
    ) {
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
          el.classList.add(
            'virtual__key--permanent-pressed'
          );
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

     

        // case 'Tab':
        //   currentKey = '&#9;----'
        //   break;

      default:
        break;
    }
  } else {
    if (currentKey === 'Tab') {
      currentKey =`\t`
    }
    // textarea
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
    textarea.value =
      currentValueLeft + currentKey + currentValueRight;
    textarea.setSelectionRange(
      currentPosition + 1,
      currentPosition + 1
    );
  }
};

const mousedownHandler = (e) => {
  // if (e.target.tagName !== 'BUTTON') {
  //   return;
  // }
  // const currentKey = e.target
  // switch (currentKey) {
  //   case 'CapsLock':
  //     break;
  //   default:
  //     break;
  // }
};

const mouseupHandler = (e) => {};

// EVENTS
document.body.addEventListener('keypress', keypressHandler);

document.body.addEventListener('keydown', keydownHandler);
document.body.addEventListener('keyup', keyupHandler);

keyboard.addEventListener('click', clickHandler);
keyboard.addEventListener('mousedown', mousedownHandler);
keyboard.addEventListener('mouseup', mouseupHandler);
