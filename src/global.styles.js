import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
$sub-color: #777;
$main-color: #44aa44;

* {
  box-sizing: border-box;
}

body {
  font-family: 'Bebas Neue', cursive;
  box-sizing: border-box;
  padding: 20px 60px;
  font-family: ''
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

h1,
h2,
h3 {
  font-family: 'Bebas Neue', cursive;
}

`;
