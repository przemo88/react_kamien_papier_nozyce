import React, { Component } from 'react';
class ResultInfo extends Component {

    render(props) {
        return (
            <div>Wybrałeś: {`${this.props.id}`}</div>
        )
    }
}

export default ResultInfo;