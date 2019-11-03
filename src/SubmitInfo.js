import React from 'react';
import styles from './submit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faHandScissors, faHandRock } from '@fortawesome/free-solid-svg-icons';
import ResultInfo from './ResultInfo';


function  Submit({id,click}){


        if (id === 'nozyce') {
            return (
                <button className="submit" onClick={click}><FontAwesomeIcon className="icon" icon={faHandScissors}></FontAwesomeIcon></button>
            )
        }

        else if (id === 'papier') {
            return (
                <button className="submit" onClick={click}><FontAwesomeIcon className="icon" icon={faHandPaper}></FontAwesomeIcon></button>
            )
        }

        else if (id === 'kamien') {
            return (
                <button className="submit" onClick={click}><FontAwesomeIcon className="icon" icon={faHandRock}></FontAwesomeIcon></button>
            )
        }

    }

export default Submit;