export const findAndAddClass = (findEl, classToAdd = 'permanent-pressed') => {
  const el = document.querySelector(
    `[data-name="${findEl}"]`,
  );
  el.classList.add(classToAdd);
};
