import React, { Component } from "react";
import "./assets/CSS/Home.css";
import Dice from "./Dice";
import GameInfo from "./GameInfo";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">Dice Game</div>

        <div className="row text-center mt-5">
          <div className="col-5">
            <button
              className="btn btn-outline-primary btnGame"
              onClick={() => {
                this.props.placeABet(true);
              }}
            >
              Sic
            </button>
          </div>

          <div className="col-2">
            <Dice />
          </div>

          <div className="col-5">
            <button
              className="btn btn-outline-primary btnGame"
              onClick={() => {
                this.props.placeABet(false);
              }}
            >
              Bo
            </button>
          </div>
        </div>

        <div className="gameInfo text-center">
          <GameInfo />
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placeABet: (SicBo) => {
      let action = {
        type: "PLACE_A_BET",
        SicBo,
      };
      dispatch(action);
    },

    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};
export default connect(null,mapDispatchToProps)(Home);
