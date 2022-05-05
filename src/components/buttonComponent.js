export const buttonComponent = (content) => {
  const button = document.createElement('button');
  button.className = 'keyboard__key';
  button.setAttribute('type', 'button');
  button.textContent = content;
  return button;
};
