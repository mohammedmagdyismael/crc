import styled from "styled-components";

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
    text-align: unset;
    color: #333;
    font-weight: 700;
    white-space: pre-line;
    background-color: #ffffff7d;
    padding: 15px;
    @media only screen and (max-width: 1315px) {
      font-size: 18px;
    }
`;

export const OptionContainer = styled.div`
    background-color: ${props => props.isRight ? '#4CAF50' : '#ffffff'};
    color: ${props => props.isRight ? '#ffffff' : '#333'};
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
  text-align: unset;
  color: #333;
  font-weight: 700;

  @media only screen and (max-width: 1315px) {
      font-size: 18px;
  }
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
  @media only screen and (max-width: 1315px) {
    font-size: 14px;
  }
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
  @media only screen and (max-width: 1315px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const TeamsDetailsContainer = styled.div`
  width: fit-content;
  @media only screen and (max-width: 1315px) {
    margin: 0px auto 35px auto;
  }
`;

export const Stopwatch = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin: 0px 30px;
`;
