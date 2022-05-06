export const delElemFromDOM = (arrOfElements) => {
  if (Array.isArray(arrOfElements)) {
    arrOfElements.forEach((element) => {
      element.remove();
    });
  } else {
    arrOfElements.remove(arrOfElements);
  }
};
