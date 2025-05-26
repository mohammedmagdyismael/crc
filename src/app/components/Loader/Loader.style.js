import styled, { keyframes } from 'styled-components';

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;



export const Wrapper = styled.div`
  ${({ width, height, thickness, outerColor, innerColor, theme }) => `
    width: ${width}px;
    height: ${height}px;
    border: ${thickness}px solid gray;
    border-top: ${thickness}px solid ${outerColor || 'blue'};
    border-radius: 50%;
  `}

  animation: 1.5s ${rotationAnimation} linear infinte;
  -webkit-animation: 1.5s ${rotationAnimation} linear infinite;

  ${({ extendStyle }) => extendStyle || ''};
`;
