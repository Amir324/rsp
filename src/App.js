import React, {useState} from 'react';
import styled from "styled-components"
import Header from "./components/Header";
import Item from "./components/Item";
import Score from "./components/Score";
import GameReset from "./components/GameReset";
import {ITEMS} from "./constants";
import {findIcon, randomFromArray, selectWinner} from "./helpers";
import LogoImage from "./assets/images/logo-bonus.svg";

const Container = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 100vh;
  background-color: #61dafb;
`

const ItemsWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  height: 100%;
`

const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {

    const [totalScore, setTotalScore] = useState(0)
    const [currentRoundWinner, setCurrentRoundWinner] = useState(null)
    const [userChoiceState, setUserChoiceState] = useState(null)
    const [houseChoiceState, setHouseChoiceState] = useState(null)

    const housePickedItem = (ITEMS) => {
        return randomFromArray(Object.keys(ITEMS))
    }

    const onClickHandler = (userChoice) => {
        setUserChoiceState(userChoice)
        const houseChoice = housePickedItem(ITEMS)
        setHouseChoiceState(houseChoice)
        const winnerChoice = selectWinner(userChoice, houseChoice)

        console.log({userChoice, houseChoice, winnerChoice})

        if (winnerChoice === userChoice) {
            setTotalScore(totalScore + 1)
            setCurrentRoundWinner("user")
        } else if (winnerChoice === houseChoice) {
            setTotalScore(totalScore - 1)
            setCurrentRoundWinner("house")
        } else {
            setCurrentRoundWinner("tie")
        }
    }

    const onResetHandler = () => {
        setCurrentRoundWinner(null)
    }

    return (
        <Container>
            <Header>
                <Logo src={LogoImage} alt=""/>
                <Score score={totalScore}/>
            </Header>

            {!currentRoundWinner && <ItemsWrapper>
                {Object.keys(ITEMS).map(item => {
                    return <Item type={item} imgSrc={findIcon(item)} onClick={onClickHandler}/>
                })}
            </ItemsWrapper>}
            {currentRoundWinner &&
            <ResultWrapper>
                <Item imgSrc={findIcon(userChoiceState)}/>
                <GameReset winner={currentRoundWinner} onClick={onResetHandler}/>
                <Item imgSrc={findIcon(houseChoiceState)}/>
            </ResultWrapper>}
        </Container>
    );
}

export default App;
