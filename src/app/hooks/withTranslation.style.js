import styled, { css } from 'styled-components';

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const LoaderInnerContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const extendStyleLoader = css`
    height: 210px;
    width: 210px;
    border: 2px solid #f3f3f3;
    border-top: 3px solid #3498db;
    margin: 0;

    @media only screen and (max-width: 1315px) {
        height: 110px;
        width: 110px;
    }
`;

