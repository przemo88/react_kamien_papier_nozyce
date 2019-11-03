import React, { Component } from 'react';


class ResultInfo extends Component {


    render(props) {
        return (
            <div> {this.props.id}{console.log(this.props.id)}</div >
            //<div></div>
        )
    }
}

export default ResultInfo;