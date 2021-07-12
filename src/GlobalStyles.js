import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --white: #ffffff;
    --light: #eeedeb;
    --primaryLight: #cce2e2;
    --darkGray: #b3b3b3;
    --primary: #44babc;
    --primaryDark: #35797d;
    --black: #000000;
  }
  
  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: var(--light);
  }



  textarea, select{
    resize:none;
  }
`;
