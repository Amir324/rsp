import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const InnerContainer = styled.div`
  position: relative;
  padding: 20px;
  max-width: 600px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0 10px 16px;
  max-height: 100vh;
  overflow-y: auto;
  border-radius: 10px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
