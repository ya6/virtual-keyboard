export const textareaComponent = () => {
  const textarea = document.createElement('textarea');
  textarea.className = 'use-keyboard-input';
  textarea.setAttribute("placeholder", "Click here");
  return textarea;
};
