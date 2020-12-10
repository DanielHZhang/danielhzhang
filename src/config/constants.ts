export const IS_BROWSER =
  Object.prototype.hasOwnProperty.call(process, 'browser') && typeof window !== 'undefined';
export const IS_PRODUCTION_ENV = process.env.NODE_ENV === 'production';
