import styled, { keyframes } from "styled-components";
import { Image } from "./Image";

const AnimationImages = keyframes`
    0%{
        opacity: 0;
        transform: translateY(25px);
    }

    100%{
        opacity: 1;
        transform: translateY(0);
    }
`;

const ContainerSection = styled.div`

    padding: 0.875rem 2rem 3.75rem;

   & > span{
        display:none;
    } 

    @media (min-width:${props=>props.theme.breakPoint}) {

        padding: 4rem 8% 0;
        
        p{
           display: none;
        }

       & > span{
            display: block;
            text-align: center;
            padding: 2.875rem;
            font-weight: 400;
            font-size: 0.875rem;
            
        }

        a{
            text-decoration: none;
            color: ${props=>props.theme.pageColor};
            font-weight: 700;
        }

    }

    p{
        text-align: center;
        margin-bottom: 4rem;
        color: ${({theme})=>theme.colorText};
        font-family: "Palanquin", sans-serif;
        font-size: 0.875rem;
        line-height: 1rem;
    }

`;

const ContainerPhotos = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-rows: 250px 450px 250px 450px;

    animation: ${AnimationImages} 1s;

    @media (min-width:${props=>props.theme.breakPoint}){
        
        grid-template-columns: auto auto auto;
        grid-template-rows: 150px 200px 150px;

        grid-template-areas: "A B ."
                             "C B ."
                             "C D D";

         div:nth-child(1){
            grid-area: A;
        }
         div:nth-child(2){
            grid-area: B;
        }
        div:nth-child(3){
            grid-area: C;
        }
        div:nth-child(4){
            grid-area: D;
        } 
    }

`;

export function Section(){
    return(
        <ContainerSection>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet,</p>

            <ContainerPhotos>

                <Image link={"https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} titleLinks={"paletas"}/>

                <Image link={"https://images.unsplash.com/photo-1477505982272-ead89926a577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} titleLinks={"casquinha"}/>

                <Image link={"https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"} titleLinks={"casquinha"}/>

                <Image link={"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} titleLinks={"casquinha"}/>

            </ContainerPhotos>

            <span>fale concosco no instagram <a href="#">@space_cream</a></span>
        </ContainerSection>
    );
}