export const findAndRemoveClass = (
  findEl,
  classToRemove = 'permanent-pressed'
) => {
  const el = document.querySelector(
    `[data-name="${findEl}"]`
  );
  el.classList.remove(classToRemove);
};
