import React from 'react';
import styles from './submit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Submit({ id, click, icon }) {

    return (
        <button className="submit" onClick={() => click(id)}><FontAwesomeIcon className="icon" icon={icon}></FontAwesomeIcon></button>
    )
}

export default Submit;