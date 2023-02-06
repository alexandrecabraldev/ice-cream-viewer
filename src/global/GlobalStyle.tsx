import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Staatliches', cursive;
    }
`;