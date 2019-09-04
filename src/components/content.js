import React, { Component } from 'react';
import { Row, Col, Container, Nav, NavItem, NavLink } from 'reactstrap'
import Menulist from './menulist';

export class Content extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md="1">
                        <Nav vertical className="shadow-sm bg-white rounded">
                            <NavLink href="#" className="m-auto"><img src={require("../assets/images/fork.png")} style={{ width: 30, height: 30 }} alt="menu" /></NavLink>
                            <NavLink href="#" className="m-auto"><img src={require("../assets/images/clipboard.png")} style={{ width: 30, height: 30 }} alt="history transaction" /></NavLink>
                            <NavLink href="#" className="m-auto"><img src={require("../assets/images/add.png")} style={{ width: 30, height: 30 }} alt="add menu" /></NavLink>
                        </Nav>
                    </Col>
                    <Col md="8">
                        <Container style={{ marginTop: "5%" }}>
                            <Menulist />
                        </Container>
                    </Col>
                    <Col md="3">
                        <Nav vertical className="shadow-sm bg-white full-height">
                            <NavItem className="m-auto">
                                <img src={require('../assets/images/food-and-restaurant.png')} alt="empty cart" />
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Content;
