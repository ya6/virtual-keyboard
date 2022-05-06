import { delElemFromDOM } from "./delElemFromDOM";
import { appendElemToDOM } from "./appendElemToDOM";

export const replaceElemToDOM = (parent, oldArrOfElements, newArrOfElements) => {
 
  delElemFromDOM(oldArrOfElements)
  appendElemToDOM(parent, newArrOfElements)
};
