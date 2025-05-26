import {
    CloseButton,
    Container,
    Content,
    Overlay,
} from './PopUp.style';

const PopUp = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Container>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Content>{children}</Content>
      </Container>
    </Overlay>
    );
};

export default PopUp;
