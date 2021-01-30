export const ITEMS = {
  PAPER: "PAPER",
  ROCK: "ROCK",
  SCISSORS: "SCISSORS",
  LIZARD: "LIZARD",
  SPOCK: "SPOCK",
};

export const RULES = {
  [ITEMS.PAPER]: {
    beats: [ITEMS.ROCK, ITEMS.SPOCK],
  },

  [ITEMS.ROCK]: {
    beats: [ITEMS.SCISSORS, ITEMS.LIZARD],
  },

  [ITEMS.SCISSORS]: {
    beats: [ITEMS.PAPER, ITEMS.LIZARD],
  },

  [ITEMS.LIZARD]: {
    beats: [ITEMS.PAPER, ITEMS.SPOCK],
  },

  [ITEMS.SPOCK]: {
    beats: [ITEMS.ROCK, ITEMS.SCISSORS],
  },
};

export const ITEMS_COLORS = {
  [ITEMS.PAPER]: {
    color1: "hsl(230, 89%, 62%)",
    color2: "hsl(230, 89%, 62%)",
  },

  [ITEMS.ROCK]: {
    color1: "hsl(349, 71%, 52%)",
    color2: "hsl(349, 70%, 56%)",
  },

  [ITEMS.SCISSORS]: {
    color1: "hsl(39, 89%, 49%)",
    color2: "hsl(40, 84%, 53%)",
  },

  [ITEMS.LIZARD]: {
    color1: "hsl(261, 73%, 60%)",
    color2: "hsl(261, 72%, 63%)",
  },

  [ITEMS.SPOCK]: {
    color1: "hsl(189, 59%, 53%)",
    color2: "hsl(189, 58%, 57%)",
  },
};

//     - Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
// - Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 62%)
// - Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
// - Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
// - Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)
