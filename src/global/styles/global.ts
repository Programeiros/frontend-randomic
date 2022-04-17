import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.color.background};
    font: 16px;
    color: ${({ theme }) => theme.color.text_dark}
  }

  button {
    cursor: pointer;
  }
`
