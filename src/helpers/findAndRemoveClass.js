export const findAndRemoveClass = (
  findEl,
  classToRemove = 'permanent-pressed',
) => {
  if (document.querySelector(`[data-name="${findEl}"]`)) {
    document.querySelector(`[data-name="${findEl}"]`).classList.remove(classToRemove);
  }
};
