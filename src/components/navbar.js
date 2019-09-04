import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Row, Col, Container, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export class Navbars extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md="9">
                        <Navbar color="faded" light className="shadow-sm" >
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-auto" />
                            <NavbarBrand href="/" className="m-auto">Food Items</NavbarBrand>
                            <FontAwesomeIcon icon={faSearch} size="1x" className="ml-auto" />
                        </Navbar>
                    </Col>
                    <Col md="3">
                        <Navbar color="faded" light className="shadow-sm">
                            <NavbarBrand className="m-auto">Cart <Badge style={{ backgroundColor: '#56cad5' }}>0</Badge></NavbarBrand>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Navbars