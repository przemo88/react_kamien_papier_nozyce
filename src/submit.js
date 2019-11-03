import React from 'react';
import styles from './submit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faHandScissors, faHandRock } from '@fortawesome/free-solid-svg-icons';
import Result from './Result';


function  Submit(props){

{console.log(props)}
        if (this.props.id === 'nozyce') {
            return (
                <button className="submit"><FontAwesomeIcon className="icon" icon={faHandScissors}></FontAwesomeIcon></button>
            )
        }

        else if (this.props.id === 'papier') {
            return (
                <button className="submit"><FontAwesomeIcon className="icon" icon={faHandPaper}></FontAwesomeIcon></button>
            )
        }

        else if (this.props.id === 'kamien') {
            return (
                <button className="submit"><FontAwesomeIcon className="icon" icon={faHandRock}></FontAwesomeIcon></button>
            )
        }

    }

export default Submit;