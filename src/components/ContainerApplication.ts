import styled from "styled-components";

export const ContainerApplication = styled.main`
    background-color: ${props=>props.theme.bodyColor};
    max-width: 24rem;
    margin: 0 auto;

    @media (min-width:${props=>props.theme.breakPoint}) {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        max-width: 80rem;
        //max-width: 105.3125rem;
        //margin: auto;

    }
`;