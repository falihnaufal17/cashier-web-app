import React, { Component } from 'react';
import Navbars from '../components/navbar';
import Content from '../components/content';

export class Home extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'rgba(190, 195, 202, 0.3)' }}>
                <Navbars />
                <Content />
            </div>
        );
    }
}

export default Home;
