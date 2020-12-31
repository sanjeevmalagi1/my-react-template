import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import store from './store'

import Home from './containers/Home';

import './index.css';

const SecondScreen = () => {
    return (
        <div>
            <p>Second page</p>
        </div>
    );
};

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/second" component={SecondScreen} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

render(<App />, document.getElementById("root"));