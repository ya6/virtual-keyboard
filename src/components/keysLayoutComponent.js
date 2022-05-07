import { buttonComponent } from './buttonComponent';

import { appendElemToDOM } from '../helpers/appendElemToDOM';

export const keysLayoutComponent = (
  keyLayout,
  keyLayoutNumber
) => {
  const keyboardKeys = document.createElement('div');
  keyboardKeys.className = 'keyboard__keys';
  // keyboardKeys.innerHTML = '';

  let keysArr = [];
  const spaceButton = ' ';
  // const iconButton = [];

  const LineBreak = ['Back&thinsp;space', 'Del', 'Enter', 'Shift'];
  const longButton = [
    // 'Backspace',
    'Back&thinsp;space',
    'Tab',
    'Del',
    'Caps Lock',
    'Enter',
    ' Shift ',
    'Shift',
    'Ctrl',
    ' Ctrl ',
    'Win',
    'Alt',
    ' Alt ',
    '&#9650',
    '&#9660',
    '&#9668',
    '&#9658',
  ];

  keyLayout.forEach((elem) => {
    if (
      longButton.some((el) => el === elem[keyLayoutNumber]) //long
    ) {
      const wideButton = buttonComponent(
        elem[keyLayoutNumber]
      );
      wideButton.classList.add('keyboard__key--wide');
      if ( longButton.some((el) => el === elem[keyLayoutNumber])) {
        
      }
      wideButton.setAttribute('data-name', elem[keyLayoutNumber]);
      keysArr.push(wideButton);
    } else if (elem[keyLayoutNumber] === spaceButton) { //space
      const wideButton = buttonComponent(
        elem[keyLayoutNumber]
      );
      wideButton.classList.add('keyboard__key--extra-wide');
      wideButton.setAttribute('data-name', elem[keyLayoutNumber]);
      keysArr.push(wideButton);
    } else {
      const wideButton = buttonComponent(
        elem[keyLayoutNumber]
      );
      wideButton.setAttribute('data-name', elem[keyLayoutNumber]);
      keysArr.push(wideButton); //all
    }

    if (
      LineBreak.some((el) => el === elem[keyLayoutNumber]) //line break
    ) {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'keyboard__line';
      appendElemToDOM(lineDiv, keysArr);
      appendElemToDOM(keyboardKeys, lineDiv);
      keysArr = [];
    }
  });

  const lineDiv = document.createElement('div');
  lineDiv.className = 'keyboard__line';
  appendElemToDOM(lineDiv, keysArr);
  appendElemToDOM(keyboardKeys, lineDiv);

  // const keysArr = keyLayout.map((element) => {
  //   return buttonComponent(element[keyLayoutNumber]);
  // });

  // appendElemToDOM(keyboardKeys, keysArr);

  return keyboardKeys;
};
