import React from 'react';
import "./Counter.scss";
import "./GameInfo.scss";
function GameInfo(props) {

    const roundLimit = props.roundLimit;

    if (roundLimit) {
        return (

            <div className="submit_row game_info">Now you can play.</div>
        )
    }
    else {
        return (

            <div className="submit_row game_info">To start press the first button on the left.</div>
        )
    }


}

export default GameInfo;