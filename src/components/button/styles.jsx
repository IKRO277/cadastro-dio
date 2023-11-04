import styled from "styled-components";

export const ContainerButton = styled.div`
    display: flex;
    width: 196px; /* Reduzido em 30% */
    height: 28.7px; /* Reduzido em 30% */
    flex-shrink: 0;
    border-radius: 18.9px; /* Reduzido em 30% */
    border: 1px solid #E4105D;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.4rem; /* Reduzido em 30% */
    margin-bottom: 1.4rem; /* Reduzido em 30% */

    & button {
        display: flex;
        width: 189px; /* Reduzido em 30% */
        height: 22.4px; /* Reduzido em 30% */
        flex-shrink: 0;
        color: #FFF;
        text-align: center;
        font-family: Open Sans;
        font-size: 12.6px; /* Reduzido em 30% */
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: #E4105D;
        border: none;
        border-radius: 18.9px; /* Reduzido em 30% */
        justify-content: center;
        align-items: center;

        &:hover {
            background: #8a153f;
            transition: 0.3s;
        }
    }
`;

