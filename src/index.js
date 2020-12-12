import React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BasicLayout from "./layouts/Basic";

import rootReducer from './rootReducer';

import './index.css';

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

const store = configureStore({
   reducer: rootReducer,
});

function App() {
    return (
        <Provider store={store}>
            <Router>
                <BasicLayout>
                    <Switch>
                        <Route path="/second" component={SecondScreen} />
                        <Route path="/" component={Home} />
                    </Switch>
                </BasicLayout>
            </Router>
        </Provider>
    );
}

render(<App />, document.getElementById("root"));