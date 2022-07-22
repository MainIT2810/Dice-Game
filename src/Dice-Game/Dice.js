import React, { Component } from "react";
import { connect } from "react-redux";
class Dice extends Component {
  renderDice = () => {
    return this.props.DiceArr.map((Dice, index) => {
      return (
        <img
          key={index}
          src= {Dice.img}
          style={{ width: 50, height: 50 }}
          alt="xúc xắc"
          className="ml-2"
        />
      );
    });
  };
  render() {
    return <div>{this.renderDice()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    DiceArr: state.DiceGameReducer.DiceArr,
  };
};
export default connect(mapStateToProps)(Dice);
