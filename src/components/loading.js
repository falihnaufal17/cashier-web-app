import React, { Component } from 'react';
import { Spinner, Container } from 'reactstrap'
export class Loading extends Component {

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
