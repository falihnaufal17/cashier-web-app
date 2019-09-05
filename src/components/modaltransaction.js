import React from 'react';
import { Modal, ModalBody, Row, Col, Button } from 'reactstrap';
let datauser = JSON.parse(localStorage.getItem('data')) || ''
let dataCart = JSON.parse(localStorage.getItem('cart')) || ''
class Modaltransaction extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: this.props.dataCart,
            dataTransct: this.props.dataTransaction,
        }
    }
    render() {
        let { cart, dataTransct } = this.state
        console.log('data cart: ', cart)
        console.log('data transaction: ', dataTransct)
        console.log('total props: ', this.props.totalHarga)
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} centered>
                    <ModalBody>
                        <Row>
                            <Col md="6" className="mr-auto">
                                <h6>Checkout</h6>
                            </Col>
                            <Col md="6" className="ml-auto">
                                <h6>Receipt No: #{dataTransct.id_transaction}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" className="mr-auto">
                                <h6>Cashier: {datauser.nama}</h6>
                            </Col>
                        </Row>
                        <div className="mt-5">
                            {
                                cart && cart.length > 0
                                &&
                                cart.map((item) => {
                                    return (
                                        <Row className="mt-2">
                                            <Col md="6" className="mr-auto">
                                                <h6>{item.name}</h6>
                                            </Col>
                                            <Col md="6" className="ml-auto">
                                                <h6 style={{ textAlign: 'right' }}>Rp. {item.price}</h6>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </div>
                        <Row className="mt-5">
                            <Col md="6" className="mr-auto">
                                <h6>Ppn 10%</h6>
                            </Col>
                            <Col md="6" className="ml-auto">
                                <h6 style={{ textAlign: 'right' }}>Rp. 10.500</h6>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md="6" className="ml-auto">
                                <h6 style={{ textAlign: 'right' }}>Total: {this.props.totalHargal}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" className="mr-auto">
                                <h6 style={{ textAlign: 'left' }}>Payment: Cash</h6>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Button style={{ backgroundColor: '#F24F8A', width: '100%', height: 50, fontWeight: 'bold', fontSize: 20 }}>Print</Button>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <h6 style={{ textAlign: 'center' }}>Or</h6>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Button style={{ backgroundColor: '#57CAD5', width: '100%', height: 50, fontWeight: 'bold', fontSize: 20 }}>Send Email</Button>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Modaltransaction;