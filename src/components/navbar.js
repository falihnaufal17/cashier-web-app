import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Row, Col, Container, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import datacart from '../publics/cart'

export class Navbars extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            cart: datacart,
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        let countCart = this.state.cart.length
        console.log(countCart)
        return (
            <Container fluid>
                <Row>
                    <Col md="9">
                        <Navbar color="faded" light className="shadow-sm" style={{ backgroundColor: 'white' }} >
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-auto" />
                            <NavbarBrand href="/" className="m-auto">Food Items</NavbarBrand>
                            <FontAwesomeIcon icon={faSearch} size="1x" className="ml-auto" />
                        </Navbar>
                    </Col>
                    <Col md="3">
                        <Navbar color="faded" light className="shadow-sm" style={{ backgroundColor: 'white' }}>
                            <NavbarBrand className="m-auto">Cart <Badge style={{ backgroundColor: '#56cad5' }}>{countCart}</Badge></NavbarBrand>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Navbars