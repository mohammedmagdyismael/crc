import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const TimerDisplay = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: red;
  width: fit-content;
  margin: auto;

  @media only screen and (max-width: 1315px) {
      font-size: 18px;
  }
`;

export const PlayPauseBtn = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;
