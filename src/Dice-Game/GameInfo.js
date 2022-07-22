import React, { Component } from 'react';

class GameInfo extends Component {
    render() {
        return (
            <div>
                <div className="display-4">
                    YOU CHOOSE : <span className='text-danger'>Sic</span>
                </div>

                <div className="display-4">
                    WIN: <span className='text-success'>0</span>
                </div>

                <div className="display-4">
                TOTAL NUMBER OF PLAYS: <span className='text-primary'>0</span>
                </div>
            </div>
        );
    }
}

export default GameInfo;