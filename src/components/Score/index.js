import React from "react";
import { Container, Number, Title } from "./style";

const Score = ({ score }) => {
  return (
    <Container>
      <Title>SCORE</Title>
      <Number>{score}</Number>
    </Container>
  );
};

export default Score;
