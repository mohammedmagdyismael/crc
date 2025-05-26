import styled from 'styled-components';

// Styled components for PopUp
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Container = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 90vh;
  width: 100%;
  position: relative;

  margin: 10px 5px;

  @media only screen and (max-width: 1315px) {
    max-width: unset;
    width: 100%;
    max-height: unset;
    height: 95vh;
    padding: 0px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 20px;
  overflow: auto;
  max-height: calc(90vh - 30px);
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #9c9c9c;
    border-radius: 15px;
  }
`;