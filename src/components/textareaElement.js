export const textarea = (() => {
  const textarea = document.createElement('textarea');
  textarea.className = 'use-keyboard-input';
  textarea.setAttribute("placeholder", "Virtual keyboard");
  return textarea;
})();
