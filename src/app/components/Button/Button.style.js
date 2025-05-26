import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 4px;
    ${props => !props.isDisabled && `
        cursor: pointer;    
    `};
    & > p {
        width: 100%;
        text-align: center;
    }
    ${props => props.extendStyles || ''};  
`;

export const Label = styled.p`
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;