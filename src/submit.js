import React, { Component } from 'react';
import styles from './submit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faHandScissors, faHandRock } from '@fortawesome/free-solid-svg-icons';
import { throwStatement } from '@babel/types';
import Result from './result';


class Submit extends Component {

    constructor(props) {
        super(props);

        this.test = this.test.bind(this);
    }

    test = (props) => {
        //return <Result id={this.props.id}></Result>
        alert(this.props.id);
    }




    render() {

        if (this.props.id === 'nozyce') {
            return (
                <button className="submit" onClick={this.test}><FontAwesomeIcon className="icon" icon={faHandScissors}></FontAwesomeIcon></button>
            )
        }

        else if (this.props.id === 'papier') {
            return (
                <button className="submit" onClick={this.test}><FontAwesomeIcon className="icon" icon={faHandPaper}></FontAwesomeIcon></button>
            )
        }

        else if (this.props.id === 'kamien') {
            return (
                <button className="submit" onClick={this.test}><FontAwesomeIcon className="icon" icon={faHandRock}></FontAwesomeIcon></button>
            )
        }

    }

}

export default Submit;