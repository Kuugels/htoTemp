import React from 'react';
import './InfoPanel.css';

const InfoPanel = (props) => (
    <div className="InfoPanel">
        <h3>{props.infoHeader}</h3>
        {props.infoList.map(info => 
            <p>{info}</p>
        )}
    </div>
)

export default InfoPanel;