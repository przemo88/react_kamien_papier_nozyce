import React, { Component } from 'react';
import styles from './submit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faHandScissors, faHandRock } from '@fortawesome/free-solid-svg-icons';



class Submit extends Component {
    render() {



        if (this.props.name === 'nozyce') {
            return (
                <button className="submit"><FontAwesomeIcon className="icon" icon={faHandScissors}></FontAwesomeIcon></button>
            )
        }

        else if (this.props.name === 'papier') {
            return (
                <button className="submit"><FontAwesomeIcon className="icon" icon={faHandPaper}></FontAwesomeIcon></button>
            )
        }

        else if (this.props.name === 'kamien') {
            return (
                <button className="submit"><FontAwesomeIcon className="icon" icon={faHandRock}></FontAwesomeIcon></button>
            )
        }

    }

}

export default Submit;