import styled from "styled-components";


export const LabelContainer = styled.div`
    margin-bottom: 1.5rem;
`;

export const Label = styled.p`
    font-size: 32px;
    text-align: center;
    color: #333;
    font-weight: 700;
`;

export const TeamsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    min-height: 330px;
    margin-bottom: 20px;
    column-gap: 10px;
    width: calc(98% - 10px);
    margin: 0 auto 10px;
`;

export const TeamLogo = styled.img`
    width: 120px;
    height: 120px;
    margin: auto;
    display: flex;
`;

export const TeamLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
`;

export const AnswerLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    
    color: ${props => props.isRight && '#4CAF50'};
    color: ${props => props.isWrong && 'red'};
`;

export const AnswerSectionLabel = styled(AnswerLabel)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    color: unset;
    margin: 15px 20px;
`;

export const Answer = styled(AnswerSectionLabel)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    
    color: ${props => props.isRight && '#4CAF50'};
    color: ${props => props.isWrong && 'red'};
`;

export const AnswerReson = styled(AnswerSectionLabel)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    white-space: pre-line;
    color: ${props => props.isRight && '#4CAF50'};
    color: ${props => props.isWrong && 'red'};
`;

export const TeamContainer = styled.div`
    border: 1px solid rgb(169, 169, 169);
    border-radius: 8px;
    width: 100%;
    padding: 20px 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const RightAnsContainer = styled.div`
    padding: 30px 0px;
    border: 1px solid #a9a9a9;
    border-radius: 8px;
    width: calc(98% - 10px);
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;