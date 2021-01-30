import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 750px) {
    order: 1;
  }
`;
export const Winner = styled.div`
  color: white;
  font-size: 25px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: white;
  width: 200px;
  height: 50px;
  align-items: center;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: 700;
  font-family: inherit;
`;
