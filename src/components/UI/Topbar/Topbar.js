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
/*

<img onClick={props.openMenu} src={props.logo} alt="HTO Logo" />

<header >
                    <h1>Helsingin Tekniikan Opiskelijat - HTO ry</h1>
                    <h3>Insinöörin asialla, ihmistä vastaan - jo vuodesta 1975</h3>
                </header>
*/