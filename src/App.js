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

        const infotest = ["LINKKI LOMAKKEESEEN"];
        const infotest1 = ["JEKKU!"];

        const infotest3 = ["EI OLE! HÖHÖ!"];

        const opyt = ["METKA", "UIO", "TXO", "Soffa", "Demoni", "MeMO", "ESN-Metropolia", "AGU", "HIV", "MURU", "LEPO", "Tilde", "Trombi"];

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
                        <SidePanel>
                            <InfoPanel infoHeader="Liity jäseneksi tästä!" infoList={infotest}/>
                            <InfoPanel infoHeader="Jekku Porkkana!" infoList={infotest1}/>
                            <InfoPanel infoHeader="Toimistokamera" infoList={infotest3}/>
                        </SidePanel>

                        <Switch>
                            <Route path="/tursajaiset" component={tursajaiset} />
                            <Route path="/yhdistys" component={yhdistys} />
                            <Route path="/opiskelijakulttuuri" component={opk} />
                            <Route path="/" exact component={Posts} />
                        </Switch>
                        
                        <SidePanel>
                            <InfoPanel infoHeader="Opiskelijayhdistykset" infoList={opyt}/>
                            <InfoPanel infoHeader="Linkkejä!" infoList={infotest3}/>
                        </SidePanel>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
