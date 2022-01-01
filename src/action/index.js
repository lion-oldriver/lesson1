export const TEXTCHANGE = 'TEXTCHANGE';

export const textChange = (textValue, textLength) => {
  return {
    type: TEXTCHANGE,
    textValue: textValue,
    textLength: textLength,
  };
};