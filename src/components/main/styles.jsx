import styled from "styled-components";

export const ContainerMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    height: 100%;
    background: #1E192C;
`;

export const ContentMain = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;

    & h2 {
        display: flex;
        width: 210px; /* Diminuído em 30% */
        height: 270px; /* Diminuído em 30% */
        justify-content: center;
        align-items: center;
        font-size: 1.4rem; /* Diminuído em 30% */
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: auto auto; /* Ajustado proporcionalmente */
    }
`;

export const Box = styled.div`
    display: flex;
    width: auto;
    height: auto;
    flex-shrink: 0;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin: auto auto;
    margin-top: 1.6rem; /* Ajustado proporcionalmente */
    text-align: start;

    & h2 {
        width: 280px; /* Diminuído em 30% */
        height: 35px; /* Diminuído em 30% */
        margin-left: 0;
        justify-content: start;
    }

    & p {
        margin-bottom: 0.7rem; /* Diminuído em 30% */
        width: 260px; /* Diminuído em 30% */
    }

    & a {
        color: #23DD7A;
        text-decoration: none;
    }
`;

export const Formulario = styled.div`
    display: flex;
    width: 210px; /* Diminuído em 30% */
    height: 80.5px; /* Diminuído em 30% */
    flex-shrink: 0;
    flex-direction: column;
    gap: 0.56rem; /* Diminuído em 30% */
`;

export const Preenchimento = styled.div`
    display: flex;
    width: auto;
    height: 21px; /* Diminuído em 30% */
    flex-shrink: 0;
    align-items: center;
    gap: 0.35rem; /* Diminuído em 30% */
    flex-direction: column;

    & img {
        width: 11.2px; /* Diminuído em 30% */
        height: 11.2px; /* Diminuído em 30% */
        flex-shrink: 0;
    }

    & input {
        background: rgba(0, 0, 0, 0);
        border: none;
        font-size: 15.4px; /* Diminuído em 30% */
        color: white;
    }

    & input::placeholder {
        font-size: 15.4px; /* Diminuído em 30% */
        color: white;
        font-weight: normal;
    }

    & input:focus {
        outline: none;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.35rem; /* Diminuído em 30% */
    border-bottom: 1px solid #3B3450;
`;
