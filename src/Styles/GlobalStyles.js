import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
   margin: 0;
    font-size: 14px;
    background-color: '#61677c';
    background-image: url(${({ theme }) => theme.body});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: ${({ theme }) => theme.text};
    overflow-y: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }`;

export const lightTheme = {
  body: 'https://files.fm/thumb_show.php?i=qgexqfmtv',
  text: '#121620',
  button: '#61677c',
  buttonText: '#ebecf0',
  tableColor: '#FFEBCD',
  tableHeadColor: '#008b8b',
};

export const darkTheme = {
  body: 'https://files.fm/thumb_show.php?i=ynn8rjc4z',
  text: '#f1f1f1',
  button: '#ebecf0',
  buttonText: '#61677c',
  tableColor: '#F0FFFF',
  tableHeadColor: '#5F9EA0',
};
