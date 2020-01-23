import React, { Component } from "react";
import "./ResultInfo.scss";

class ReactInfo extends Component {
    render(props) {
        return (
            <div className="result">
                <div className="left">
                    <div className="info">Round Limit: <br></br> {`${this.props.roundLimit}`}</div>
                    <div className="info">You choice: <br></br> {`${this.props.id}`}</div>
                    <div className="info">PC choice: <br></br> {`${this.props.ran}`}</div>
                </div>
                <div className="right">
                    <div className="info">Round Winner: <br></br> {`${this.props.roundWinner}`}</div>
                    <div className="info">User Point: <br></br> {`${this.props.userPoint}`}</div>
                    <div className="info">PC Point: <br></br> {`${this.props.pcPoint}`}</div>
                </div>
            </div >
        );
    }
}
export default ReactInfo;