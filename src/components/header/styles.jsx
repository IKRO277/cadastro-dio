import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    background: #151515;
    align-items: center;

    & img {
        width: auto;
        height: 1.5rem;
    }
`

export const ContentHeader = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    align-items: center;
    margin: 0 3rem;
    gap: 60%;

`

export const ButtonsHeader = styled.div`
    display: flex;
    width: 4rem;
    height: 100%;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    & a {
        text-align: center;
        font-family: Open Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
    }

    & button {

        background: #151515;
        border: none;
        border-radius: 11px;
        background: #565656;
        width: 120px;
        height: 22px;
        flex-shrink: 0;
        width: 118.91px;
        transform: rotate(-0.474deg);
        text-align: center;
        font-family: Open Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`