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
  switch (action) {
    case "": {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default DiceGameReducer;
