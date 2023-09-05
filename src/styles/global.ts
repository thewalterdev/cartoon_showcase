import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    
    body {
        font-family: 'Alpino', sans-serif;
        width: 100%;
        height: 100vh;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
