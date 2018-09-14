import React from 'react';
import './Topbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const topBar = (props) => {
    return (
        <div className="Topbar">
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default topBar;