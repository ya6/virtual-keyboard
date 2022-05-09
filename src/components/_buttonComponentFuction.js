export const buttonComponent = (content) => {
  const button = document.createElement('button');
  button.className = 'keyboard__key';
  button.setAttribute('type', 'button');
  button.innerHTML = content;
  return button;
};
