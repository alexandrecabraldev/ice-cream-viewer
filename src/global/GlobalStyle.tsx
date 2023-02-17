import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,p,span{
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Staatliches', cursive;
    }

    body{
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width:${props=>props.theme.breakPoint}) {
            height: 100vh;
        }
    }
`;