import React from 'react';
import styled from "styled-components"

const Container = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`
const Image = styled.img`
  height: 50%;
  cursor: pointer;
`
const Item = ({type, imgSrc, onClick=()=>{}}) => {
    return (
        <Container onClick={() => onClick(type)}>
            <Image src={imgSrc} alt=""/>
        </Container>
    );
};

export default Item;
