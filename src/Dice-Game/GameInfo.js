import React, { Component } from 'react';
import {connect} from "react-redux"
class GameInfo extends Component {
    render() {
        return (
            <div>
                <div className="display-4">
                    YOU CHOOSE : <span className='text-danger'>{this.props.SicBo ? "Sic" : "Bo"}</span>
                </div>

                <div className="display-4">
                    WIN: <span className='text-success'>{this.props.TotalWin}</span>
                </div>

                <div className="display-4">
                TOTAL NUMBER OF PLAYS: <span className='text-primary'>{this.props.TotalNumberOfPlays}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        SicBo: state.DiceGameReducer.SicBo,
        TotalWin: state.DiceGameReducer.TotalWin,
        TotalNumberOfPlays: state.DiceGameReducer.TotalNumberOfPlays
    });
}
export default connect(mapStateToProps)(GameInfo);