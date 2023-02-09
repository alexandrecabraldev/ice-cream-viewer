import styled, { keyframes } from "styled-components";


const AnimationTextImages = keyframes`
    0%{
        transform: translateY(-25px);
        opacity: 0;
    }

    100%{
        transform: translateY(0px);
        opacity: 1;
    }
`;

const ContainerImage = styled.div<PropsImage>`

    position: relative;
    overflow: hidden;
    border-radius: 20px;
    background: url(${props=>props.link});
    background-position: center;
    background-size: cover;

    span{
        text-transform: uppercase;
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: ${props=>props.theme.pageColor};
        padding: 0 1.5rem;
        background-color: ${props=>props.theme.imageBackgroundColor};
        border-radius: 20px;
        line-height: 2.125rem;
        font-size: 1.25rem;

        animation: ${AnimationTextImages};
    }
`;


interface PropsImage{
    link:string;
    titleLinks?:string;
}


export function Image({link, titleLinks}:PropsImage){
    return(
        <ContainerImage link={link}>
            <span>{titleLinks}</span>
        </ContainerImage>
    )
}