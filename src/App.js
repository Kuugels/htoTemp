import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout';
import Posts from './components/Posts/Posts';
import InfoPage from './components/InfoPage/InfoPage';
import InfoPanel from './components/InfoPanel/InfoPanel';
import SidePanel from './components/SidePanel/SidePanel';
import Content from './containers/Content';

class App extends Component {
    render() {

        const links = [
            {nimi: "Sodexo ruokalistat", linkki: "https://www.sodexo.fi/metropolia-opiskelijaravintolat"},
            {nimi: "Oma", linkki: "https://oma.metropolia.fi/"},
            {nimi: "Lukkarikone", linkki: "https://lukkarit.metropolia.fi/"},
            {nimi: "Metropolia", linkki: "https://www.metropolia.fi/"}
        ];

        const linkListItems = links.map(link => (
            <a id={link.nimi} href={link.linkki}>
                <li>{link.nimi}</li>
            </a>
        ));

        const opyt = [
            {nimi: "METKA", linkki: "http://metkaweb.fi/"},
            {nimi: "UIO", linkki: "http://www.uio.fi/"},
            {nimi: "TXO", linkki: "https://www.facebook.com/tukholmankatu10"},
            {nimi: "Soffa", linkki: "http://soffa.edu.metropolia.fi/"},
            {nimi: "Demoni", linkki: "https://demoniry.fi/"},
            {nimi: "MeMo", linkki: "https://www.facebook.com/myyrmaenopiskelijat/"},
            {nimi: "ESN-Metropolia", linkki: "http://esn.metropolia.fi/"},
            {nimi: "AGU", linkki: "https://www.facebook.com/agricolankadunopiskelijat/"},
            {nimi: "HIV", linkki: "https://www.facebook.com/hivopy/"},
            {nimi: "MURU", linkki: "https://www.facebook.com/MURU-ry-133723319305/"},
            {nimi: "LEPO", linkki: "https://www.facebook.com/Lepory/"},
            {nimi: "Tilde", linkki: "https://tilde.fi/"},
            {nimi: "Trombi", linkki: "https://www.trombiry.com/"}
        ];

        const opyListItems = opyt.map(opy => (
            <a id={opy.nimi} href={opy.linkki}>
                <li>{opy.nimi}</li>
            </a>
        ));

        const yhdistys = () => (
            <InfoPage header="Hallitus 2018">Jeeps eli hallitus on hallitus</InfoPage>
        );
        const opk = () => (
            <InfoPage header="Opiskelijakulttuuri">Juu kyllä on opiskelijakulttuuri</InfoPage>
        ); 

        const tursajaiset = () => (
            <InfoPage header="Tursajaiset">Juu</InfoPage>
        );

        return (
            <div className="App">
                <Layout>
                    <Content>
                        <Switch>
                            <Route path="/tursajaiset" component={tursajaiset} />
                            <Route path="/yhdistys" component={yhdistys} />
                            <Route path="/opiskelijakulttuuri" component={opk} />
                            <Route path="/" exact component={Posts} />
                        </Switch>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;

/**
 * 
 * <SidePanel>
                            <InfoPanel infoHeader="Jäsenyys">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGP_UL8xdB4bt8iWRQuQLqK9FNwBJ7L2buGTMlOF2iS6eQMw/viewform">
                                    <p>Liity jäseneksi tästä!</p>
                                </a>
                            </InfoPanel>
                            <InfoPanel infoHeader="Toimistokamera"></InfoPanel>
                            <InfoPanel infoHeader="Opiskelijayhdistykset">
                                <ul>{opyListItems}</ul>
                            </InfoPanel>
                            <InfoPanel infoHeader="Linkkejä!">
                                <ul>{linkListItems}</ul>
                            </InfoPanel>
                        </SidePanel>
 * 
 * 
 * 
 */
