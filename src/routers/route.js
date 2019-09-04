import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from '../pages/home';

export class Routing extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
            </Router>
        );
    }
}

export default Routing;
