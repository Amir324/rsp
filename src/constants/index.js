export const ITEMS = {
    PAPER: "PAPER",
    ROCK: "ROCK",
    SCISSORS: "SCISSORS",
    LIZARD: "LIZARD",
    SPOCK: "SPOCK"

}

export const RULES = {
    [ITEMS.PAPER]: {
        beats: [ITEMS.ROCK, ITEMS.SPOCK],
    },

    [ITEMS.ROCK]: {
        beats: [ITEMS.SCISSORS, ITEMS.LIZARD]
    },

    [ITEMS.SCISSORS]: {
        beats: [ITEMS.PAPER, ITEMS.LIZARD]
    },

    [ITEMS.LIZARD]: {
        beats: [ITEMS.PAPER, ITEMS.SPOCK]
    },

    [ITEMS.SPOCK]: {
        beats: [ITEMS.ROCK, ITEMS.SCISSORS]
    }
}
