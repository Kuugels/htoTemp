import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout';
import Posts from './components/Posts/Posts';
import Hallitus from './components/hallitus/Hallitus';
import Tursajaiset from './components/tursajaiset/Tursajaiset';
import Opiskelijakulttuuri from './components/opiskelijakulttuuri/opiskelijakulttuuri';

class App extends Component {
    render() {
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