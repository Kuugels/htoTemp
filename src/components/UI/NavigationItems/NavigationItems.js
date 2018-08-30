import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" exact>Etusivu</NavigationItem>
        <NavigationItem link="/tursajaiset">Tursajaiset</NavigationItem>
        <NavigationItem link="/yhdistys">Yhdistys</NavigationItem>
        <NavigationItem link="/opiskelijakulttuuri">Opiskelijakulttuuri</NavigationItem>
        <NavigationItem link="/">Arkisto</NavigationItem>
    </ul>
);

export default navigationItems;
