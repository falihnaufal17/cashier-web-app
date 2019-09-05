import React, { Component } from 'react';
import { Row, Col, Container, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import Menulist from './menulist';
import Modaladd from './modaladd';
import datacart from '../publics/cart'

let qty = 1
export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: datacart,
            modal: false,
            qty: qty
        };

        this.toggle = this.toggle.bind(this);
        this.addToCart = this.addToCart.bind(this)
        // this.increment = this.increment.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    increment() {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    decrement() {
        this.setState({
            qty: this.state.qty - 1
        })
    }

    addToCart = (item) => {
        this.state.cart.push(item)
        this.setState({
            cart: this.state.cart
        })
    }

    render() {
        const { cart } = this.state
        console.log("length cart: ", datacart.length)
        let receiptNo = Math.floor((Math.random() * 1000000000) + 1)
        console.log("receipt no: ", receiptNo)
        return (
            <Container fluid>
                <Row>
                    <Col md="1">
                        <Nav vertical className="shadow-sm bg-white rounded">
                            <NavLink href="#" className="m-auto"><img src={require("../assets/images/fork.png")} style={{ width: 30, height: 30 }} alt="menu" /></NavLink>
                            <NavLink href="#" className="m-auto"><img src={require("../assets/images/clipboard.png")} style={{ width: 30, height: 30 }} alt="history transaction" /></NavLink>
                            <NavLink href="#" className="m-auto" onClick={this.toggle}><img src={require("../assets/images/add.png")} style={{ width: 30, height: 30 }} alt="add menu" /></NavLink>
                        </Nav>
                    </Col>
                    <Col md="8">
                        <Container style={{ marginTop: "5%" }}>
                            <Menulist addCart={(item) => {
                                this.addToCart(item)
                                console.log('cart: ', cart)
                            }} />
                        </Container>
                    </Col>
                    <Col md="3">
                        <Nav vertical className="shadow-sm bg-white full-height">
                            {
                                cart &&
                                    cart.length > 0 ?
                                    <NavItem>
                                        {cart.map((item, key) => {
                                            return (
                                                <Card style={{ width: '100%', height: '100%' }} key={key}>
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="2">
                                                                <img src={item.image} alt={item.image} style={{ width: 50, height: 50 }} />
                                                            </Col>
                                                            <Col md="7">
                                                                <Row>
                                                                    <Col>
                                                                        <CardTitle>{item.name}</CardTitle>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>
                                                                        <Button onClick={() => this.decrement()}>-</Button>{this.state.qty}<Button onClick={() => this.increment()}>+</Button>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md="3">
                                                                <Row>
                                                                    <Col></Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col><CardSubtitle style={{ fontSize: 12 }}>{item.price * this.state.qty}</CardSubtitle></Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            )
                                        })}
                                        <center>
                                            <Row style={{ marginTop: 20 }}>
                                                <Col><Button color="danger" style={{ width: '100%' }}>Checkout</Button></Col>
                                            </Row>
                                            <Row style={{ marginTop: 20 }}>
                                                <Col><Button color="secondary" style={{ width: '100%' }}>Cancel</Button></Col>
                                            </Row>
                                        </center>
                                    </NavItem>
                                    :
                                    <NavItem>
                                        <center>
                                            <img src={require('../assets/images/food-and-restaurant.png')} alt="empty cart" />
                                        </center>
                                        <div style={{ textAlign: 'center' }}>
                                            <h6>Your cart is empty</h6>
                                            <p style={{ color: '#CECECE' }}>Please add some items from the menu</p>
                                        </div>
                                    </NavItem>
                            }

                        </Nav>
                    </Col>
                </Row>
                <Modaladd toggle={this.toggle} modal={this.state.modal} />
            </Container>
        );
    }
}

export default Content;
