export const textarea = (() => {
  const textareaEl = document.createElement('textarea');
  textareaEl.className = 'use-keyboard-input';
  textareaEl.setAttribute('placeholder', 'Virtual keyboard');
  return textareaEl;
})();
