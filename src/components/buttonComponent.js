/* eslint-disable class-methods-use-this */
export default class ButtonComponent {
  setButton(content, addContent = null) {
    const button = document.createElement('button');
    button.className = 'keyboard__key';
    button.setAttribute('type', 'button');
    button.textContent = content;

    const additionContent = document.createElement('div');
    additionContent.className = 'keyboard__key_addition';
    additionContent.textContent = addContent;
    button.append(additionContent);
    return button;
  }
}
