import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    margin: 0 45px;

    @media (max-width: 700px) {
        margin: 0;
    }
  }
  body, input, button {
      font-family: 'Roboto', sans-serif;
  }
  #root {
      margin: 0 auto;
      padding: 0;
      margin: 0;
  }
  button {
      cursor: pointer;
  }
`;
