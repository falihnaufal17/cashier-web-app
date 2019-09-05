import React, { Component } from 'react';
import { Row, Col, Container, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import Menulist from './menulist';
import Modaladd from './modaladd';
import datacart from '../publics/cart'
import Modaltransaction from './modaltransaction';

import { connect } from 'react-redux'
import { addTransaction } from '../publics/redux/actions/transaction'
import Swal from 'sweetalert2';
const localdata = JSON.parse(localStorage.getItem('data')) || ''
let qty = 1
export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: datacart,
            modal: false,
            modalTransaction: false,
            qty: qty
        };

        this.toggle = this.toggle.bind(this);
        this.toggleTransaction = this.toggleTransaction.bind(this);
        this.addToCart = this.addToCart.bind(this)
        // this.increment = this.increment.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleTransaction(data) {
        this.addTransaction(data)
        this.setState(prevState => ({
            modalTransaction: !prevState.modalTransaction
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

    addToCart = async (item) => {
        await this.state.cart.push(item)
        await this.setState({
            cart: this.state.cart
        })
        await localStorage.setItem('cart', JSON.stringify(this.state.cart))
    }

    totalHarga() {
        return this.state.cart.reduce((sum, val) => {
            let sumTotal = sum + val.price

            return sumTotal
        }, 0)
    }

    removeAllCart() {
        this.setState({
            cart: this.state.cart.length = []
        })
    }

    addTransaction(data) {
        this.props.dispatch(addTransaction(data))
            .then(() => {
                Swal.fire({
                    type: 'success',
                    title: 'Transaction',
                    text: 'Transaction success!'
                })
            })
    }

    render() {
        const { cart } = this.state
        let receiptNo = Math.floor((Math.random() * 1000000000) + 1)

        console.log("length cart: ", datacart.length)
        console.log("receipt no: ", receiptNo)

        let total = 0
        cart.reduce((sum, val) => {
            total = sum + val.price
            return total
        }, 0)

        console.log("total: ", total)
        let data = {
            id_transaction: receiptNo,
            id_user: localdata && localdata.id_user,
            total: total,
            created_at: new Date(),
            updated_at: new Date()
        }

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
                                                <Col><Button color="danger" style={{ width: '100%' }} onClick={() => this.toggleTransaction(data)}>Checkout</Button></Col>
                                            </Row>
                                            <Row style={{ marginTop: 20 }}>
                                                <Col><Button color="secondary" onClick={() => this.removeAllCart()} style={{ width: '100%' }}>Cancel</Button></Col>
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
                <Modaltransaction toggle={this.toggleTransaction} modal={this.state.modalTransaction} dataTransaction={data} dataCart={cart} totalHarga={total} />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        transaction: state.transaction.transactionList
    }
}

export default connect(mapStateToProps)(Content);
