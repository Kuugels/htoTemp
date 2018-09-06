import React from  'react';
import './CoverImage.css';

const coverImage = (props) => {

    return (
        <div className="CoverImage">
            <img src={props.cover} />
            <div className="CoverTxt">{props.children}</div>
        </div>
    )
};

export default coverImage;