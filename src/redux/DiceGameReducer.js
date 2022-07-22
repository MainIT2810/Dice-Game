const stateDefault = {
  SicBo: true,
  DiceArr: [
    {
      id: 1,
      img: "./img/1.png",
    },
    {
      id: 2,
      img: "./img/2.png",
    },
    {
      id: 3,
      img: "./img/3.png",
    },
  ],
  TotalWin: 0,
  TotalNumberOfPlays: 0,
};

const DiceGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "PLACE_A_BET": {
      state.SicBo = action.SicBo;
      return { ...state };
    }
    case "PLAY_GAME": {
      // Step 1: Handle Random Dice
      let DiceArrRandom = [];
      for (let index = 0; index < 3; index++) {
        // Every time loop random the number from 1 to 6
        let numberRandom = Math.floor(Math.random() * 6) + 1;

        // Create a new Dice Object from number random
        let DiceRanDom = {
          id: numberRandom,
          img: `./img/${numberRandom}.png`,
        };

        // Push Object DiceRanDom into DiceArrRandom
        DiceArrRandom.push(DiceRanDom);
      }

      // Assign state DiceArr equal DiceArrRandom
      state.DiceArr = DiceArrRandom;

      // Handle TotalNumberOfPlays
      state.TotalNumberOfPlays += 1;

      // Handle TotalWin
      let countScore = DiceArrRandom.reduce((score, dice, index) => {
        return (score += dice.id);
      }, 0);

      if (
        (countScore > 11 && state.SicBo) ||
        (countScore < 11 && !state.SicBo)
      ) {
        state.TotalWin += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default DiceGameReducer;
