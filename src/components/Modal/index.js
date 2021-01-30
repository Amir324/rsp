import React from "react";
import { Backdrop, CloseButton, Container, InnerContainer } from "./style";

const Modal = ({ children, onShowModal }) => {
  return (
    <Container>
      <Backdrop onClick={() => onShowModal(false)} />
      <InnerContainer>
        <CloseButton onClick={() => onShowModal(false)}>X</CloseButton>
        {children}
      </InnerContainer>
    </Container>
  );
};

export default Modal;
