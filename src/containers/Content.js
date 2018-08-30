import React from 'react';
import './Content.css';

const content = (props) => (
    <div className="Content">
        {props.children}
    </div>
);

export default content;
