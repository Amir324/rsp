import React from 'react';
import styled from "styled-components"

const Container = styled.div`
    border: 1px solid lightblue;
    display: flex;
    justify-content: space-between;
    height: 100px;
`

const Header = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Header;
