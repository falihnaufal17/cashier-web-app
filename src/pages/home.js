import React, { Component } from 'react';
import Navbars from '../components/navbar';
import Content from '../components/content';

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbars />
                <Content />
            </div>
        );
    }
}

export default Home;
