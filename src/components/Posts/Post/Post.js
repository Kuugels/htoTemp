import React from 'react';

const post = (props) => (
    <div className="Post">
        <article>
            <img src={props.imgSrc} alt={props.imgALt} />
            <h1>{props.header}</h1>
            {props.article.map(paragraph => 
                <p>{paragraph}</p>
            )}
            <h6>{props.addedBy}</h6>
        </article>
    </div>
);

export default post;
