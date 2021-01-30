import React from "react";
import styled from "styled-components";
import { findItemColor } from "../../helpers";
import { Container } from "./style";

const Image = styled.img`
  height: 50%;
`;
const Item = ({ type, imgSrc, onClick = () => {}, size = "small" }) => {
  return (
    <Container
      size={size}
      color={findItemColor(type)}
      onClick={() => onClick(type)}
    >
      <Image src={imgSrc} alt="" />
    </Container>
  );
};

export default Item;
