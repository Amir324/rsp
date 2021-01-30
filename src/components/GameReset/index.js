import React from 'react';
import styled from "styled-components"


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Winner = styled.div`
  color: white;
`
const Button = styled.div`
  cursor: pointer;
`
const GameReset = ({winner, onClick}) => {
    return (
        <Container>
            <Winner>
                {winner}
            </Winner>
            <Button onClick={onClick}>PLAY AGAIN</Button>
        </Container>
    );
};

export default GameReset;
