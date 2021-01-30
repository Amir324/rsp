import React, { useState } from "react";
import Header from "./components/Header";
import Item from "./components/Item";
import Score from "./components/Score";
import Modal from "./components/Modal";
import GameReset from "./components/GameReset";
import { ITEMS } from "./constants";
import { findIcon, randomFromArray, selectWinner } from "./helpers";
import LogoImage from "./assets/images/logo-bonus.svg";
import RulesImage from "./assets/images/image-rules-bonus.svg";
import {
  Container,
  ItemsWrapper,
  ItemWrapper,
  Logo,
  ModalButton,
  PickTitle,
  ResultWrapper,
  Rules,
} from "./style";

function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [currentRoundWinner, setCurrentRoundWinner] = useState(null);
  const [userChoiceState, setUserChoiceState] = useState(null);
  const [houseChoiceState, setHouseChoiceState] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const housePickedItem = (ITEMS) => {
    return randomFromArray(Object.keys(ITEMS));
  };

  const onClickHandler = (userChoice) => {
    setUserChoiceState(userChoice);
    const houseChoice = housePickedItem(ITEMS);
    setHouseChoiceState(houseChoice);
    const winnerChoice = selectWinner(userChoice, houseChoice);

    if (winnerChoice === userChoice) {
      setTotalScore(totalScore + 1);
      setCurrentRoundWinner("YOU");
    } else if (winnerChoice === houseChoice) {
      setTotalScore(totalScore - 1);
      setCurrentRoundWinner("HOUSE");
    } else {
      setCurrentRoundWinner("TIE");
    }
  };

  const onResetHandler = () => {
    setCurrentRoundWinner(null);
  };

  const showModalHandler = (state) => {
    setShowModal(state);
  };

  return (
    <Container>
      {showModal && (
        <Modal onShowModal={showModalHandler}>
          <Rules src={RulesImage} />
        </Modal>
      )}

      <Header>
        <Logo src={LogoImage} alt="" />
        <Score score={totalScore} />
      </Header>

      {!currentRoundWinner && (
        <ItemsWrapper>
          {Object.keys(ITEMS).map((item, i) => {
            return (
              <Item
                type={item}
                key={i}
                imgSrc={findIcon(item)}
                onClick={onClickHandler}
              />
            );
          })}
        </ItemsWrapper>
      )}
      {currentRoundWinner && (
        <ResultWrapper>
          <ItemWrapper>
            <PickTitle>YOU PICKED</PickTitle>
            <Item
              size={"big"}
              type={userChoiceState}
              imgSrc={findIcon(userChoiceState)}
            />
          </ItemWrapper>
          <GameReset winner={currentRoundWinner} onClick={onResetHandler} />
          <ItemWrapper>
            <PickTitle>THE HOUSE PICKED</PickTitle>
            <Item
              size={"big"}
              type={houseChoiceState}
              imgSrc={findIcon(houseChoiceState)}
            />
          </ItemWrapper>
        </ResultWrapper>
      )}
      <ModalButton onClick={() => showModalHandler(true)}>RULES</ModalButton>
    </Container>
  );
}

export default App;
