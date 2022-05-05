// export const appendElemToDOM = (parent, ...elements) =>{
//   parent.append(...elements);
// }
export const appendElemToDOM = (parent, arrOfElements) => {
  
  const df = new DocumentFragment();
  if (Array.isArray(arrOfElements)) {
    df.append(...arrOfElements);  
  } else {
    df.append(arrOfElements);
  }
  parent.append(df); // append do the same???
};
