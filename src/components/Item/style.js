import styled from "styled-components";

export const Container = styled.div`
  height: ${(props) => (props.size === "big" ? "240px" : "120px")};
  width: ${(props) => (props.size === "big" ? "240px" : "120px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border: 15px solid ${(props) => props.color};
  background-color: white;
  cursor: pointer;
`;
