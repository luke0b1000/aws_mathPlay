import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Settings from './Settings';
import LocalStorage from '../utils/LocalStorage';

class App extends Component {
    constructor() {
        super();
        this.LocalStorage = new LocalStorage();
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Switch>
                    <Route
                        path="/settings"
                        render={props => (
                            <Settings
                                {...props}
                                LocalStorage={this.LocalStorage}
                            />
                        )}
                    />
                    <Route
                        render={props => (
                            <Main {...props} LocalStorage={this.LocalStorage} />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}
export default App;
