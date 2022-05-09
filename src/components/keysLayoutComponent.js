import { buttonComponent } from './buttonComponent';
import { appendElemToDOM } from '../helpers/appendElemToDOM';
const button = new buttonComponent

export const keysLayoutComponent = (
  keyLayout,
  keyLayoutNumber,
) => {
  const keyboardKeys = document.createElement('div');
  keyboardKeys.className = 'keyboard__keys';
  // keyboardKeys.innerHTML = '';

  let keysArr = [];
  const spaceButton = ' ';
  
  const LineBreak = ['Back space', 'Del', 'Enter', 'Shift'];
  const longButton = [
    // 'Backspace',
    'Back space',
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
let count = 0;
let addContent = null;
const firstRow = 13;
  keyLayout.forEach((elem) => {
    if (
      longButton.some((el) => el === elem[keyLayoutNumber]) // long
    ) {
      const wideButton = button.setButton(
        elem[keyLayoutNumber],
      );
      wideButton.classList.add('keyboard__key--wide');
      if (longButton.some((el) => el === elem[keyLayoutNumber])) {

      }
      wideButton.setAttribute('data-name', elem[keyLayoutNumber]);
      keysArr.push(wideButton);
    } else if (elem[keyLayoutNumber] === spaceButton) { // space
      const wideButton = button.setButton(
        elem[keyLayoutNumber],
      );
      wideButton.classList.add('keyboard__key--extra-wide');
      wideButton.setAttribute('data-name', elem[keyLayoutNumber]);
      keysArr.push(wideButton);
    } else {
      let regularButton= null;
      
      if (count < firstRow) {     
        addContent = elem[1]
        regularButton = button.setButton(
          elem[0], addContent
        );

       } else {
         addContent = null
         regularButton = button.setButton(
          elem[keyLayoutNumber], addContent
        );}
       
       count++
      
      regularButton.setAttribute('data-name', elem[keyLayoutNumber]);
      keysArr.push(regularButton); // all
    }

    if (
      LineBreak.some((el) => el === elem[keyLayoutNumber]) // line break
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

  return keyboardKeys;
};
