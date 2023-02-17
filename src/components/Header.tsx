import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 24rem;  
    background-color: ${props=>props.theme.headerColor};
    
    

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

    p{
        display: none;
    }

    @media (min-width:${props=>props.theme.breakPoint}) {

        max-width: 100%;
        max-height: 46.25rem;
        border-radius: 20px 0 0 20px;
        overflow-y: auto;

        ::-webkit-scrollbar{
            border-radius: 99px;
            background-color: transparent;
            width: 8px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: ${props=>props.theme.headerTitleColor};
            border-radius: 99px;
        }
        
        h1{
            font-size: 3rem;
            line-height: 3.825rem;
        }

        p{
            display: initial;
            text-align: center;
            font-family: 'Palanquin', sans-serif;
            font-size: 1rem;
            color: ${props=>props.theme.white};
            padding: 0 3rem;
            line-height: 1.5rem
        }

    }

`;

const ImageContainer = styled.div`
    margin: 2rem auto;
    max-width: 8.56rem;
    height: 8.56rem;

    img{
        width: 100%;
    }

    img:nth-child(2){
        display: none;
    }

    @media (min-width:${props=>props.theme.breakPoint}) {

        max-width: 13.375rem;
        height: 10.437rem;

        img{
            width: 100%;
            height: 100%;
        }

        img:nth-child(1){
            display: none;
        }
        
        img:nth-child(2){
            display: initial;
        }
    }
`;

export function Header(){
    return(
        <HeaderContainer>
            <ImageContainer>
                <img src={Logo} alt="imagem de um sorvete com um círculo em volta" />
                <img src={Logo2} alt="imagem de um sorvete com um círculo em volta" />
            </ImageContainer>
            <h1>Space cream</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem.elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem.</p>
        </HeaderContainer>
    );
}