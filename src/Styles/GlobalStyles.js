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
    height: 100vh;
    font-size: normal;
    font-size: 14px;
    background-color: ${({ theme }) => theme.text};
    background-image: url(${({ theme }) => theme.body});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow-y: auto;
    color: ${({ theme }) => theme.text};

    @media screen and (min-width: 480px) {
      background-image: url(${({ theme }) => theme.body});
      background-position: cover;
    }
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
  body: '/images/bg-castle-web-min.jpg',
  text: '#121620',
  button: '#61677c',
  buttonText: '#ebecf0',
};

export const darkTheme = {
  body: '/images/dining-room-web-min.jpg',
  text: '#f1f1f1',
  button: '#ebecf0',
  buttonText: '#61677c',
};

// const flexCenter = `
// display: flex;
//   align-items: center;
//   justify-content: center; `;
