import styled from "styled-components"

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
    }
`;


interface PropsImage{
    link:string;
}


export function Image({link}:PropsImage){
    return(
        <ContainerImage link={link}>
            <span>paletas</span>
        </ContainerImage>
    )
}