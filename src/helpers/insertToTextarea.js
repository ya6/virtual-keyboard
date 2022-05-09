export const insertToTextarea = (textarea, insertion) => {
  const newValue = textarea.value;
  const currentPosition = textarea.selectionStart;

  const currentValueLeft = newValue.slice(
    0,
    currentPosition,
  );
  const currentValueRight = newValue.slice(
    currentPosition,
    newValue.length,
  );
  // eslint-disable-next-line no-param-reassign
  textarea.value = currentValueLeft + insertion + currentValueRight;

  textarea.setSelectionRange(
    currentPosition + 1,
    currentPosition + 1,
  );
};
