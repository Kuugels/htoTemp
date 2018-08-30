import React, {Component} from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidebar.css';
import Logo from '../Logo/Logo';

class Sidebar extends Component {
    state = {
        open: false
    }

    sidebarOpenHandler = () => {
        this.setState({open: !this.state.open});
    }
    
    render() {
        return (
            <div className="Sidebar">
                <Logo />
                <NavigationItems />
            </div>
        );
    }
}

export default Sidebar;
