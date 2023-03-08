import { css } from '@emotion/react';
import img from './dining-room-web-min.jpg';
export const GlobalStyles = css`
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
    background-color: #61677c;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow-y: auto;
    color: white;

    /* @media screen and (min-width: 480px) {
      background-image: url(/src/images/dining-room-web-min.jpg);
      background-position: cover;
    } */
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
  }
`;
