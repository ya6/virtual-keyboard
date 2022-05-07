export const footer = (() => {
  const footer = document.createElement('div');
  footer.className = 'footer';

  const fragment = new DocumentFragment();
  const osTitle = document.createElement('div');
  osTitle.className = 'descriptions';
  osTitle.textContent =
    'Keyboard created in the Windows operating system';

  const langTitle = document.createElement('div');
  langTitle.className = 'descriptions';
  langTitle.textContent =
    'To switch the language press left:  ctrl + alt';
  fragment.append(osTitle, langTitle);
  footer.append(fragment);

  return footer;
})();
