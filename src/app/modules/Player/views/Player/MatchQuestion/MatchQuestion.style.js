import styled, { css } from "styled-components";

export const extendPenatlyBtn = css`
  background-color: #870404;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  height: 60px;
  width: 30%;
  margin: 0 auto;
  border-radius: 8px;
`;

export const Container = styled.div`
    padding: 40px;
    @media only screen and (max-width: 1315px) {
      padding: 5px;
    }
`;

export const QuestionContainer = styled.div`
    margin-bottom: 1.5rem;
`;

export const Question = styled.p`
    font-size: 22px;
    // text-align: center;
    color: #333;
    font-weight: 700;
    white-space: pre-line;
`;

export const OptionContainer = styled.div`
    background-color: #fff;
  
    ${props => props.isSelected && `
      background-color: #979595;
    `};

    background-color: ${props => props.isRight && '#4CAF50'};
    background-color: ${props => props.isWrong && 'red'};

    color: #333;
    color: ${props => props.isRight && '#ffffff'};
    color: ${props => props.isWrong && '#ffffff'};

    cursor: pointer;

    border: 1px solid #ccc;
    padding: 0px 30px;
    margin-bottom: 1rem;
    border-radius: 4px;
    text-align: left;
    font-size: 20px;
    font-weight: 700;

    @media only screen and (max-width: 1315px) {
      font-size: 17px;
    }
`;

export const Option = styled.p`
    
`;

export const AnswerJustification = styled.p`
    padding: 40px;
    font-size: 22px;
    color: darkgreen;
    font-weight: 700;
    white-space: pre-line;
    background-color: #ffffff7d;
`;

export const QuestionsCounter = styled.div`
  font-size: 32px;
  // text-align: center;
  color: #333;
  font-weight: 700;
`;

export const ActionBtn = styled.button`
  width: 280px;
  height: 50px;
  border: unset;
  border-radius: 8px;
  background-color: darkmagenta;
  display: flex;
  margin: 10px auto;
  cursor: pointer;
  :hover > p {
    color: #61dafb;
  }
`;

export const ActionBtnLabel = styled.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const OptionsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  padding: 0;

  @media only screen and (max-width: 1315px) {
      display: flex;
      flex-direction: column;
  }
`;

export const TeamQuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1315px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TeamsDetailsContainer = styled.div`
  width: fit-content;
  @media only screen and (max-width: 1315px) {
    margin: 0px auto 35px auto;
  }
`