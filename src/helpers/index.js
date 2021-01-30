import { ITEMS_COLORS, RULES } from "../constants";
import { ITEMS } from "../constants";
import paperIcon from "../assets/images/icon-paper.svg";
import rockIcon from "../assets/images/icon-rock.svg";
import scissorsIcon from "../assets/images/icon-scissors.svg";
import spockIcon from "../assets/images/icon-spock.svg";
import lizardIcon from "../assets/images/icon-lizard.svg";

export const selectWinner = (player1, player2) => {
  if (player1 === player2) return "tie";

  if (RULES[player1].beats.includes(player2)) {
    return player1;
  }

  return player2;
};

export const findIcon = (type) => {
  if (type === ITEMS.SCISSORS) {
    return scissorsIcon;
  } else if (type === ITEMS.ROCK) {
    return rockIcon;
  } else if (type === ITEMS.PAPER) {
    return paperIcon;
  } else if (type === ITEMS.LIZARD) {
    return lizardIcon;
  } else if (type === ITEMS.SPOCK) {
    return spockIcon;
  } else {
    return "";
  }
};

export const randomFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const findItemColor = (item) => {
  return ITEMS_COLORS[item].color1;
};
