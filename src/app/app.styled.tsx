import { createGlobalStyle } from 'styled-components';
import { COLORS } from 'src/theme';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.DARK};
    background-color: ${COLORS.LIGHT};
    text-rendering: optimizeSpeed;
    overflow-x: hidden;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    color: ${COLORS.DARK};
    font: inherit;
  }

  #root {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;
