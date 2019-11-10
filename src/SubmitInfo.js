import React from 'react';
import './submit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Submit({ id, click, icon, disabled, action, loterry }) {
    return (
        <button className={action} onClick={() => click(id)} disabled={disabled}><FontAwesomeIcon className="icon" icon={icon} disabled={true}></FontAwesomeIcon></button>
    )
}

export default Submit;