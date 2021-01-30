import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1000px;
  height: 100%;
`;

export const ItemsWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 300px);
`;

export const Logo = styled.img`
  height: 100%;
`;

export const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: calc(100% - 200px);
`;

export const ItemWrapper = styled.div`
  position: relative;
`;

export const PickTitle = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -50px;
  font-size: 25px;
  width: 100%;
`;
export const Rules = styled.img``;

export const ModalButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  outline: none;
  height: 40px;
  width: 105px;
  background-color: transparent;
  border: 3px solid lightblue;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
`;
