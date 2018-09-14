import React from 'react';
import './InfoPage.css';

const infoPage = (props) => {
    return (
        <div className="InfoPage">
            <article>
                {props.children}
            </article>
        </div>
    );
}

export default infoPage;
