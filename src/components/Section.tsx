import styled from "styled-components";
import { Image } from "./Image";

const ContainerSection = styled.div`
    padding: 0 2rem;

    p{
        padding-top: 0.875rem;
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

`;

export function Section(){
    return(
        <ContainerSection>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet,</p>

            <ContainerPhotos>

                <Image link={"https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>

                <Image link={"https://images.unsplash.com/photo-1477505982272-ead89926a577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>

                <Image link={"https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"}/>

                <Image link={"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>

            </ContainerPhotos>
        </ContainerSection>
    );
}