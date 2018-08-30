import React from 'react';
import './InfoPage.css';

const infoPage = (props) => {
    return (
        <div className="InfoPage">
            <article>
                <h1>{props.header}</h1>
                <p>{props.children}</p>
            </article>
        </div>
    );
}

export default infoPage;
