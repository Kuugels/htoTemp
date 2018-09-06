import React from 'react';
import './InfoPanel.css';

const InfoPanel = (props) => (
    <div className="InfoPanel">
        <h3>{props.infoHeader}</h3>
        <div>{props.children}</div>
    </div>
)

export default InfoPanel;