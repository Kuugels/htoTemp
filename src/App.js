import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout';
import Posts from './components/Posts/Posts';
import Hallitus from './components/hallitus/Hallitus';
import Tursajaiset from './components/tursajaiset/Tursajaiset';
import Opiskelijakulttuuri from './components/opiskelijakulttuuri/opiskelijakulttuuri';

class App extends Component {
    render() {

        const links = [
            {nimi: "Sodexo ruokalistat", linkki: "https://www.sodexo.fi/metropolia-opiskelijaravintolat"},
            {nimi: "Oma", linkki: "https://oma.metropolia.fi/"},
            {nimi: "Lukkarikone", linkki: "https://lukkarit.metropolia.fi/"},
            {nimi: "Metropolia", linkki: "https://www.metropolia.fi/"}
        ];

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

        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/tursajaiset" component={Tursajaiset} />
                        <Route path="/yhdistys" component={Hallitus} />
                        <Route path="/opiskelijakulttuuri" component={Opiskelijakulttuuri} />
                        <Route path="/" exact component={Posts} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;