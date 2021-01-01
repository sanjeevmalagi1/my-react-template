import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './containers/Home';

import { useSelector } from 'react-redux';


function Routes() {
    
    const isLoggedIn = useSelector(state => state.basic.isLoggedIn);

    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default Routes;