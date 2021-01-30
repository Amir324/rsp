import React from "react";
import { Button, Container, Winner } from "./style";

const GameReset = ({ winner, onClick }) => {
  return (
    <Container>
      <Winner>{winner === "TIE" ? "TIE" : `WINNER IS ${winner}`}</Winner>
      <Button onClick={onClick}>PLAY AGAIN</Button>
    </Container>
  );
};

export default GameReset;
