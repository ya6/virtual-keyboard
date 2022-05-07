export const insertToTextarea = (textarea, insertion) => {
  let newValue = textarea.value;
  let currentPosition = textarea.selectionStart;

  const currentValueLeft = newValue.slice(
    0,
    currentPosition
  );
  const currentValueRight = newValue.slice(
    currentPosition,
    newValue.length
  );
  textarea.value = currentValueLeft + insertion + currentValueRight;

  textarea.setSelectionRange(
    currentPosition + insertion.length,
    currentPosition + insertion.length
  );
  

}