import React, { Component } from 'react';
import { Spinner, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/home';
const localdata = JSON.parse(localStorage.getItem('data'))
export class Loading extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {
        this.state = {
            view: <Home />
        }

        setTimeout(() => this.state.view, 3000)
    }

    render() {
        return (
            <Container>
                <Spinner color="primary" className="ml-5 mt-5" style={{ width: 200, height: 200 }} type="grow" />
                <h6>Loading...</h6>
            </Container>
        );
    }
}

export default Loading;
