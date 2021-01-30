import React from 'react';
import styled from "styled-components"

const Container = styled.div`
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 80px;
`

const Title = styled.div`
  color: blue;
`

const Number = styled.div`
    color: grey;
    font-size: 25px;
`

const Score = ({score}) => {
    return (
        <Container>
            <Title>
                SCORE
            </Title>
            <Number>
                {score}
            </Number>
        </Container>
    );
};

export default Score;
