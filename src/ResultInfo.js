import React, { Component } from 'react';
import './ResultInfo.scss';
class ResultInfo extends Component {

    render(props) {

        return (
            <>
                <div className="top">Wybrałeś: {`${this.props.id}`}</div>
                <div>Ilość rund: {`${this.props.round}`}</div>
                <div>Komputer wylosował: {`${this.props.ran}`}</div>
            </>
        )
    }
}

export default ResultInfo;
