import React from 'react';
import hto from '../../../assets/hto1.jpg';

const post = (props) => {
    let img = null;
    if (props.imgSrc == null) {
        img = hto;
    }else {
        img = props.imgSrc;
    }
    return (
        <div className="Post">
            <img className="PostImage" src={img} alt={"Post image"} />
            <article>
                {props.children}
            </article>
        </div>
    );
};



export default post;
