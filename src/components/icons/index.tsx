/** @jsxImportSource @emotion/react */
/* eslint-disable max-len */

export namespace Icon {
  type Props = {
    size?: string;
    color?: string;
  };

  export const Javascript = ({size = '3.6rem', color = '#4D4D4D'}: Props): JSX.Element => (
    <svg
      viewBox='0 0 128 128'
      css={{
        width: size,
        fill: color,
        transition: 'fill ease-in-out 200ms',
        ':hover': {fill: '#F0DB4F'},
      }}
    >
      <path d='M2 1v125h125V1H2zm66.1 106.5a14.8 14.8 0 01-9.4 7.4c-6.3 1.5-12.3.6-16.8-2-3-1.9-5.3-4.7-6.9-8l9.6-5.8.6 1.1a10 10 0 004.3 4.5c2 .7 6.5 1.1 8.2-2.4 1-1.9.7-7.7.7-14.1V58h11.8v32.2c0 6.5.6 12.4-2 17.3zm48.6-3.3c-4 14-26.8 14.4-35.8 5.2-2-2.2-3.2-3.3-4.3-5.8l9.5-5.5c2.6 4 5 6 9.1 7 5.8.7 11.6-1.3 10.3-7.4-1.3-5-11.8-6.2-18.9-11.6a16.4 16.4 0 01-3-23.3c2-2.5 5.4-4.3 9-5.2l3.6-.5c7-.1 11.5 1.7 14.8 5.3.9 1 1.6 2 3 4l-9.2 6c-1.1-2.5-3-4-5-4.8-3.2-.9-7.2.1-8 3.5-.3 1-.2 2 .2 3.6 1.3 3 5.6 4.2 9.4 6 11 4.4 14.8 9.2 15.7 15 .9 4.8-.2 8-.4 8.5z' />
    </svg>
  );

  export const Typescript = ({size = '3.6rem', color = '#4D4D4D'}: Props): JSX.Element => (
    <svg width={size} viewBox='0 0 128 128'>
      <path
        fill={color}
        d='M2 64v62.4h125V1.4H2zm100.7-5a15.6 15.6 0 017.9 4.4 20.6 20.6 0 013 4c0 .2-5.4 3.8-8.7 5.9-.2 0-.6-.5-1.2-1.3a7 7 0 00-5.8-3.5c-3.8-.3-6.3 1.7-6.2 5a4.6 4.6 0 00.5 2.3c.8 1.8 2.4 2.8 7.2 4.9 9 3.8 12.8 6.4 15.2 10 2.7 4 3.2 10.5 1.4 15.2-2 5.2-6.9 8.8-13.8 10a38.3 38.3 0 01-9.5-.2 23 23 0 01-12.7-6.5 22 22 0 01-3.3-4.8 9.3 9.3 0 011.2-.8l4.6-2.6 3.6-2 .7 1a16.8 16.8 0 004.8 4.6c4 2 9.4 1.8 12.1-.6a5.4 5.4 0 00.7-7c-1-1.4-3-2.5-8.6-5a31 31 0 01-11.7-7.2 16.5 16.5 0 01-3.5-6.3 25 25 0 01-.2-8c1.3-6.2 6-10.5 12.8-11.8a31.7 31.7 0 019.5.2zm-29.3 5.2v5H57.2v46.3H45.6V69.3H29.4v-5a49.2 49.2 0 01.1-5.2l22-.1h21.8z'
      />
    </svg>
  );

  export const Python = ({size = '3.6rem', color = '#4D4D4D'}: Props): JSX.Element => (
    <svg width={size} viewBox='0 0 128 128'>
      <path
        fill={color}
        d='M49.3 62h29.2C86.6 62 93 55.1 93 47V19.2c0-8-6.6-13.9-14.6-15.2a90.7 90.7 0 00-29 0C37.2 6.2 35 10.8 35 19.2V30h29v4H23.8c-8.5 0-16 5.1-18.3 14.8a54 54 0 000 29.5C7.6 87 12.5 93 21.1 93H31V80c0-9.7 8.4-18 18.3-18zm-1.8-39.1c-3 0-5.5-2.5-5.5-5.6 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5c0 3.1-2.5 5.6-5.5 5.6zm74.8 26c-2.1-8.5-6.1-14.9-14.6-14.9H97v13c0 10-8.8 18-18.5 18H49.3c-8 0-14.3 7.3-14.3 15.3v27.8c0 8 6.7 12.6 14.5 14.9 9.2 2.7 18 3.2 29 0C86 120.8 93 116.5 93 108V97H64v-4h43.7c8.5 0 11.6-5.8 14.6-14.7 3-9.1 2.9-17.8 0-29.5zm-42 55.5c3 0 5.5 2.5 5.5 5.6 0 3-2.4 5.5-5.5 5.5a5.5 5.5 0 010-11.1z'
      />
    </svg>
  );

  export const Html = ({size = '3.6rem', color = '#4D4D4D'}: Props): JSX.Element => (
    <svg width={size} viewBox='0 0 128 128'>
      <path
        fill={color}
        d='M9 2l10 112 45 12.5 45-12.4L119 2H9zm89.2 26.5l-.7 7.2-.2 3.3H44.6l1.2 14H96l-.3 3.5-3.3 36-.2 2.4-28.2 7.7-28.2-7.4-2-21.2h13.9l1 11L64 89v-.5l15.4-4L81 67H33.3l-3.4-38.1-.4-3.9h69l-.3 3.5z'
      />
    </svg>
  );

  export const Css = ({size = '3.6rem', color = '#4D4D4D'}: Props): JSX.Element => (
    <svg width={size} viewBox='0 0 128 128'>
      <path
        fill={color}
        d='M8.8 1l10 112.9L64 126.5l45.3-12.7L119.2 1H8.8zm89.6 25.9L95 64.5V65l-2.4 26.3-.2 2.4-28.4 7.8-28.3-7.9-2-21.7h14l1 11L64 87.3 79.4 83l1.7-18H48.8l-.3-3-.6-7.2-.3-3.8h34.7l1.3-14h-53l-.2-3-.7-7.2-.3-3.8h69.3l-.3 3.9z'
      />
    </svg>
  );

  export const Sass = ({size = '3.6rem', color = '#4D4D4D'}: Props): JSX.Element => (
    <svg width={size} viewBox='0 0 128 128'>
      <path
        fill={color}
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M1.2 56.2c0 .7.2 1.1.3 1.6.8 3 2.4 5.4 4.4 7.7a51 51 0 009.5 8.4l9 6.4c.6.3 1 .8 1.6 1.2l-1.3.7c-4 2-7.8 4.3-11.3 7A23 23 0 007.8 95c-2.3 3.7-3.1 7.6-1.4 11.7a7 7 0 002.4 3c.3.3.7.6 1.1.7l3.2.6h3c3.4-.3 6.5-1.4 9.2-3.4 4.4-3 7.3-7 8.5-12a21.3 21.3 0 00-.5-12.2l-.4-1 6.8-4h.1c0 .5-.2.9-.3 1.3-.8 3-1.4 6-1.2 9.1.2 3.3 1.1 6.4 3 9.1 1.6 2.3 5.4 2.4 7 .1a16 16 0 001.6-2.5l3.2-7 .2-.4-.2 3c0 1.5 0 3 .6 4.5.4 1.2 1.2 2.2 2.6 2.3 1 .1 1.7-.3 2.4-.9 1.1-.8 2-2 2.7-3.2 2-3.5 3.9-7 5.6-10.5 1.9-3.9 3.5-7.9 5.2-11.8l.3-.7c.4 1.6.7 3.2 1.2 4.7.6 1.7 1.4 3.4 2.2 5 .4.8.4 1.3-.2 2L69 90.6l-1.4 1.9c-.2.4-.4.9-.4 1.3-.2 1 .4 1.8 1.3 2 1 .2 1.9.3 2.7.2 3.1-.2 6-1.3 8.4-3.2 3.3-2.3 4.3-5.6 3.5-9.5-.2-1-.6-2-1-3 0-.5-.1-.8.2-1.2a97.8 97.8 0 007.1-12 30 30 0 003.5 9.7l-2.7 2.6c-1.8 1.9-3.3 4-4.1 6.6a7.8 7.8 0 00-.5 3.4c.2 1.8 1.7 3 3.5 2.6 3.9-1 7.2-2.7 9.7-6 1.6-2.1 1.7-4.5 1-7-.1-.8-.4-1.4-.6-2.2l2.8-.9c5-1.1 10-1 14.7.9 2.8 1 5.1 2.8 6.5 5.5 1.6 3.4.7 6.6-2.5 8.8l-.9.6-.2.6c0 .2.4.3.5.3 1 0 2-.5 2.8-1.1 2-1.4 3.5-3.3 3.8-5.8v-1.8-.3c-.4-3.6-2.4-6.5-5.2-8.7a19 19 0 00-11.3-3.8c-3.3-.1-6.6.4-9.7 1.5l-2.7 1.1-.4-.6c-.9-2-2-3.8-2.3-6-.1-1.5-.3-3 0-4.5l1.3-4.4c.2-.7 0-1.2-.7-1.5l-.8-.3c-1.7-.2-3.4 0-5.1.4-.6.2-1 .5-1.2 1.2 0 .4-.2.7-.3 1.1-.5 1.6-.8 3.2-1.5 4.7-1.8 3.7-3.9 7.3-6 10.9l-.7 1.2c-.7-1.5-1.5-3-1.8-4.5a14 14 0 010-5.5c.3-1.4.8-2.7 1.2-4 .2-.7.1-1-.5-1.4-.3-.1-.6-.3-1-.3-1.7-.3-3.5-.2-5.3.4-.5.2-.8.5-1 1.1-.5 1.7-.9 3.3-1.6 5l-8.4 19-2 3.8-.6 1-.3-.5v-2.5l1.7-7c.4-2 1-4 1.5-5.9.2-.6.2-1.2-.3-1.8-.8-.9-2.4-1.1-3.4-.4l-.4.2.1-.6c.2-1.5.2-3-.2-4.5-.5-1.8-1.8-2.8-3.6-2.8a8 8 0 00-2.7.5c-3.4 1.4-6 3.8-8.2 6.6l-.8.7-8.7 4.7-3.2 1.8-2.6-2.4-8.2-6.6c-2.5-2-4.8-4-6.6-6.6-1.4-1.9-2.2-4-2.3-6.3a15 15 0 012.3-8.4c2-3.3 4.6-6 7.6-8.3A75.5 75.5 0 0146.2 27a42.4 42.4 0 0117-2c2.2.3 4.4.8 6.4 2 1.6.8 2.9 1.9 3.5 3.6.6 1.8.5 3.5.1 5.2-.8 3.6-2.7 6.5-5.2 9-4 4.4-8.8 7.3-14.3 9.2a39.5 39.5 0 01-9.8 2c-2.7.3-5.4 0-8-.9-1.7-.6-3.2-1.6-4.4-3-.2-.2-.4-.5-.8-.3-.4.3-.5.6-.4 1 .2.6.4 1.3.8 1.8.8 1.4 2 2.5 3.5 3.3a17 17 0 008.6 2.4c4.7.2 9.2-.5 13.7-1.7 6.4-1.8 12-5 16.4-10 3.7-4 6.3-8.7 6.9-14.3a14 14 0 00-1.3-8 14.4 14.4 0 00-6.3-6.1c-3.8-2-8-3.2-12.3-3.2H56c-5.2 0-10.3 1.5-15.2 3.3A104 104 0 0030 25 70.3 70.3 0 009.2 39.8a31 31 0 00-7.9 14.5m27.8 36c-.3 4.5-2.3 8.1-5.6 11-1.9 1.7-4 2.9-6.5 3.3-.9.1-1.8.2-2.7-.2-1.2-.5-1.5-1.6-1.5-2.8 0-1.9.6-3.6 1.5-5.2 1.2-2.1 2.9-3.7 4.7-5.2 3-2.4 6-4.4 9.3-6.2l.2-.1c.5 1.8.8 3.6.6 5.5zM54.3 71a124.7 124.7 0 01-6.2 18.2l-1.4 2.4-.3.3c-.6.6-1.1.6-1.4-.2l-.7-2.7-.2-1.9c0-4.5 1.5-8.6 3.8-12.4 1-1.5 2-3 3.6-4 .5-.3 1-.6 1.6-.7.8-.3 1.3.1 1.2 1zm17.2 21.8l6.1-7.2c.3 2.7-4.3 8-6.1 7.2zM91.2 88l-1.4.7c-.4.2-.5 0-.5-.4v-.7c.9-3 2.4-5.5 4.7-7.5h.2c1 3-.2 6.3-3 7.9z'
      />
    </svg>
  );

  export const Electron = ({size = '3.6rem', color = '#4D4D4D'}: Props): JSX.Element => (
    <svg width={size} fill={color} viewBox='0 0 128 128' css={{':hover': {fill: '#8CE6F8'}}}>
      <path d='M49 32.7c-14.3-2.7-25.6 0-30.2 8-3.4 5.8-2.4 13.6 2.4 21.9a1.5 1.5 0 002.5-1.5c-4.3-7.5-5.1-14.2-2.3-19 3.7-6.5 13.9-9 27.1-6.6a1.5 1.5 0 10.6-2.9zm-20.4 40a92.2 92.2 0 0022 17.2c20.9 12 43 15.3 54 7.8a1.5 1.5 0 00-1.6-2.4c-9.9 6.7-31 3.6-51-8a89.3 89.3 0 01-21.2-16.7 1.5 1.5 0 00-2.2 2z' />
      <path d='M101 70.8c9.5-11.1 12.8-22.3 8.2-30.1-3.3-5.8-10.3-8.8-19.7-9a1.5 1.5 0 000 3c8.4.1 14.5 2.8 17.2 7.5 3.8 6.5.8 16.5-7.9 26.7a1.5 1.5 0 102.3 2zM77 33.2a92 92 0 00-26.3 10.3C29.1 56 15.1 74.3 17 87.5a1.5 1.5 0 003-.4c-1.8-11.8 11.5-29.1 32.1-41A89 89 0 0177.5 36a1.5 1.5 0 10-.6-2.9z' />
      <path d='M42 96.8c5 13.7 13 22.2 22 22.2 6.6 0 12.7-4.5 17.5-12.4A1.5 1.5 0 1079 105c-4.3 7.1-9.5 11-15 11-7.5 0-14.6-7.5-19.2-20.2a1.5 1.5 0 00-2.7 1zM87 94a92.5 92.5 0 004-27.3c0-24.4-8.6-45.4-20.8-50.9a1.5 1.5 0 00-1.2 2.7c10.8 4.9 19 24.8 19 48.2a89.6 89.6 0 01-3.8 26.4 1.5 1.5 0 002.8.9zM114.7 92.7a7 7 0 10-7 7 7 7 0 007-7zm-3 0a4.1 4.1 0 11-4-4.1 4.1 4.1 0 014 4zM20.3 99.7a7 7 0 10-7-7 7 7 0 007 7zm0-3a4.1 4.1 0 114.1-4 4.1 4.1 0 01-4 4z' />
      <path d='M64 23.1a7 7 0 10-7-7 7 7 0 007 7zm0-3a4.1 4.1 0 114.1-4 4.1 4.1 0 01-4 4zM65.1 71.8a5.1 5.1 0 113.9-6 5.1 5.1 0 01-3.9 6z' />
    </svg>
  );

  export const Express = ({size = '3.6rem', color = '#4D4D4D'}: Props): JSX.Element => (
    <svg width={size} viewBox='0 0 128 128'>
      <path
        fill={color}
        d='M126.7 98.4c-4.6 1.2-7.4 0-10-3.7-5.6-8.5-11.9-16.6-18-25l-2.5-3.4C89 76 81.8 85.2 75.2 94.8c-2.5 3.4-5 4.9-9.5 3.7l27-36.2-25.1-32.6c4.3-.8 7.3-.4 10 3.5 5.8 8.5 12.2 16.6 18.6 25.2 6.5-8.6 12.8-16.7 18.8-25.1 2.4-3.5 5-4.8 9.3-3.5l-9.7 12.9c-4.3 5.7-8.6 11.5-13.1 17.1-1.7 2-1.4 3.3 0 5.2l25.2 33.4zM1.3 61.7c.8-3.6 1.2-7.3 2.2-10.8 6-21.4 30.6-30.3 47.5-17C61 41.6 63.4 52.6 63 65H7.1c-.8 22.2 15.2 35.6 35.5 28.8 7.2-2.4 11.4-8 13.5-15 1-3.5 2.8-4 6.1-3-1.7 8.7-5.5 16-13.5 20.6a32.7 32.7 0 01-38.1-5 34.5 34.5 0 01-8.6-20c-.1-1.2-.5-2.4-.7-3.6v-6zm5.9-1.5h50.4c-.3-16-10.3-27.4-24-27.5-15-.1-25.8 11-26.4 27.5z'
      />
    </svg>
  );
}
