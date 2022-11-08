import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.font};
}

*:not(svg, path) {
  color: ${({ theme }) => theme.color.font};
}


body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
*::-webkit-scrollbar {
  height: 7px;
}

*::-webkit-scrollbar-thumb {
  height: 10%;
  background: #464646;
}

*::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.secondary};
}

`;
