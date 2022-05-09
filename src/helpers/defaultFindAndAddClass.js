export const defaultFindAndAddClass = (findEl, classToAdd = 'permanent-pressed') => {
  if (document.querySelector(`[data-layout0="${findEl}"]`)) {
    document.querySelector(`[data-layout0="${findEl}"]`).classList.add(classToAdd);
  } else if (document.querySelector(`[data-layout1="${findEl}"]`)) {
    document.querySelector(`[data-layout1="${findEl}"]`).classList.add(classToAdd);
  } else if (document.querySelector(`[data-layout2="${findEl}"]`)) {
    document.querySelector(`[data-layout2="${findEl}"]`).classList.add(classToAdd);
  } else if (document.querySelector(`[data-layout3="${findEl}"]`)) {
    document.querySelector(`[data-layout3="${findEl}"]`).classList.add(classToAdd);
  }
};
