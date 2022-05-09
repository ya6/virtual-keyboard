export const findAndAddClass = (findEl, classToAdd = 'permanent-pressed') => {
  if (document.querySelector(`[data-name="${findEl}"]`)) {
    document.querySelector(`[data-name="${findEl}"]`).classList.add(classToAdd);
  }
};
