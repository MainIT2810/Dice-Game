import React, { Component } from "react";
import "./assets/CSS/Home.css";
import Dice from "./Dice";
import GameInfo from "./GameInfo";
class Home extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">Dice Game</div>

        <div className="row text-center mt-5">
          <div className="col-5">
            <button className="btn btn-outline-primary btnGame">Sic</button>
          </div>

          <div className="col-2">
            <Dice />
          </div>

          <div className="col-5">
            <button className="btn btn-outline-primary btnGame">Bo</button>
          </div>
        </div>

        <div className="gameInfo text-center">
          <GameInfo />
          <button className="btn btn-success"> Play game</button>
        </div>
      </div>
    );
  }
}

export default Home;
