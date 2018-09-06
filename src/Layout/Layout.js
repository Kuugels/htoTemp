import React, { Component } from 'react';
import Sidebar from '../components/UI/Sidebar/Sidebar';
import Topbar from '../components/UI/Topbar/Topbar';
import CoverImage from '../components/UI/CoverImage/CoverImage';
import logo from '../assets/hto_logo_green.svg';
import menu_logo from '../assets/hto_menu.svg';
import img from '../assets/tursajaiset1.jpg';
import './Layout.css';

class Layout extends Component {
    state = {
        sidebarOpen: false,
        logo: logo
    }

    sidebarOpenHandler = () => {
        console.log("Jekku jee nyt pitäs vissi semmone sivu jutska aukee tai jotai");
        this.setState({
            sidebarOpen: !this.state.sidebarOpen,
            logo: this.state.sidebarOpen ? menu_logo : logo
        });
        console.log(this.state.logo);
    }

    render() {
        return (
                <div className="Layout">
                    <Topbar logo={this.state.logo} openMenu={this.sidebarOpenHandler}/>
                    <CoverImage cover={img}>
                        <header >
                            <h1>Helsingin Tekniikan Opiskelijat - HTO ry</h1>
                            <h3>Insinöörin asialla, ihmistä vastaan - jo vuodesta 1975</h3>
                        </header>
                    </CoverImage>
                    {this.state.sidebarOpen ? <Sidebar /> : null}
                    <main>
                        {this.props.children}
                    </main>
                </div>
        );
    }
}

export default Layout;
