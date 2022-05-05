import { buttonComponent } from './buttonComponent';

import { appendElemToDOM } from '../helpers/appendElemToDOM';

export const keysLayoutComponent = (
  keyLayout,
  keyLayoutNumber
) => {
  const keyboardKeys = document.createElement('div');
  keyboardKeys.className = 'keyboard__keys';
  keyboardKeys.innerHTML = '';

  const keysArr = keyLayout.map((element) => {
    return buttonComponent(element[keyLayoutNumber]);
  });

  appendElemToDOM(keyboardKeys, keysArr);

  return keyboardKeys;
};
