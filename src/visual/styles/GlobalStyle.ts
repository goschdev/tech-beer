import { createGlobalStyle } from 'styled-components';

import { COLORS } from 'visual/constants';

export const GlobalStyle = createGlobalStyle`
  body, html {
    min-height: 100vh;
    background-color: ${COLORS.black};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
