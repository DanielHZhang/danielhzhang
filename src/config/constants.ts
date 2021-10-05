export const IS_BROWSER =
  Object.prototype.hasOwnProperty.call(process, 'browser') && typeof window !== 'undefined';
