import React from 'react';
import './Topbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

const topBar = (props) => {
    return (
        <div className="Topbar">
            <img src={props.logo} alt="HTO Logo" />
            <nav>
                <header onClick={props.openMenu}>
                    <h1>Helsingin Tekniikan Opiskelijat - HTO ry</h1>
                    <h3>Insinöörin asialla, ihmistä vastaan - jo vuodesta 1975</h3>
                </header>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default topBar;
