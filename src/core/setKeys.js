export const setKeys = (keyLayout, keyLayoutNumber) => {
  // keyLayout.forEach((element) => {
  //   console.log(element[keyLayoutNumber]);
  // });
 const keys =  keyLayout.map((element) => {
    return element[keyLayoutNumber];
  });
};
