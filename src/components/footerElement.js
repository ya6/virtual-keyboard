export const footer = (() => {
  const footerEl = document.createElement('div');
  footerEl.className = 'footer';

  const fragment = new DocumentFragment();
  const osTitle = document.createElement('div');
  osTitle.className = 'descriptions';
  osTitle.textContent = 'Keyboard created in the Windows operating system';

  const langTitle = document.createElement('div');
  langTitle.className = 'descriptions';
  langTitle.textContent = 'To switch the language press left:  ctrl + alt';
  fragment.append(osTitle, langTitle);
  footerEl.append(fragment);

  return footerEl;
})();
