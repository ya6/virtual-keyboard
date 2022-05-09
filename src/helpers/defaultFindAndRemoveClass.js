export const defaultFindAndRemoveClass = (findEl, classToRemove = 'permanent-pressed') => {
  if (document.querySelector(`[data-layout0="${findEl}"]`)) {
    document.querySelector(`[data-layout0="${findEl}"]`).classList.remove(classToRemove);
  } else if (document.querySelector(`[data-layout1="${findEl}"]`)) {
    document.querySelector(`[data-layout1="${findEl}"]`).classList.remove(classToRemove);
  } else if (document.querySelector(`[data-layout2="${findEl}"]`)) {
    document.querySelector(`[data-layout2="${findEl}"]`).classList.remove(classToRemove);
  } else if (document.querySelector(`[data-layout3="${findEl}"]`)) {
    document.querySelector(`[data-layout3="${findEl}"]`).classList.remove(classToRemove);
  }
};
