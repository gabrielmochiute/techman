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
  ::-webkit-scrollbar{
    width: 4px;
    background-color: var(--darkGray);
  }
  ::-webkit-scrollbar-track{
    background-color: var(--primaryDark);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--primary);
    border-radius: 15px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--light);
  }



  textarea, select{
    resize:none;
  }
`;
