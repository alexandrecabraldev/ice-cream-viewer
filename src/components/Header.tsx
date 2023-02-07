import styled from "styled-components";
import Logo from "../assets/logo.svg";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 24rem;
    background-color: ${props=>props.theme.headerColor};
    width: 100%;

    h1{
        text-transform: uppercase;
        text-align: center;
        background-color: ${props=>props.theme.headerTitleColor};
        color: ${({theme})=>theme.white};
        font-size: 2.5rem;
        line-height: 3.125rem;
        margin-bottom: 1.875rem;
        letter-spacing: 0.08em;
        text-shadow: 0 2px 2px ${props=>props.theme.textShadow};
    }
`;

const ImageContainer = styled.div`
    margin: 2rem auto;
    max-width: 8.56rem;
    height: 8.56rem;

    img{
        width: 100%;
    }
`;

export function Header(){
    return(
        <HeaderContainer>
            <ImageContainer>
                <img src={Logo} alt="imagem de um sorvete com um círculo em volta" />
            </ImageContainer>
            <h1>Space cream</h1>
        </HeaderContainer>
    );
}