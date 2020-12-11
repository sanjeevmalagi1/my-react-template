import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BasicLayout from "./layouts/Basic";


import './index.css';
import 'my-components';

const SecondScreen = () => {
    return (
        <div>
            <p>Second page</p>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <p>Home page</p>
        </div>
    );
};

function App() {
    return (
        <Router>
            <BasicLayout>
                <Switch>
                    <Route path="/second">
                        <SecondScreen />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BasicLayout>
        </Router>
    );
}

render(<App />, document.getElementById("root"));