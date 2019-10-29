import { createGlobalStyle } from 'styled-components';
import './assets/fonts/fonts.css';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.bg};
    box-sizing: border-box;
    color: ${props => props.theme.text};
    font: 100%/1.75 -apple-system, BlinkMacSystemFont, "Open Sans", "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    box-sizing: inherit;
  }
`;