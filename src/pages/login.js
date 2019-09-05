import React, { Component } from 'react';
import { Container, Input, Card, CardBody, Col, Label, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../publics/redux/actions/user'
import Swal from 'sweetalert2';

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    login(data) {
        if (this.state.email === '' || this.state.password === '') {
            Swal.fire({
                type: 'warning',
                title: 'Login',
                text: 'Isi data yang kosong dude'
            })
        } else {
            this.props.dispatch(login(data))
                .then(() => {
                    Swal.fire({
                        type: 'success',
                        title: 'Login',
                        text: 'Login Success!'
                    })
                })
                .catch((error) => {
                    console.log(error)
                    Swal.fire({
                        type: 'error',
                        title: 'Login',
                        text: 'Login Failed :('
                    })
                })
        }
    }

    render() {
        let { email, password } = this.state
        let data = {
            email: email,
            password: password
        }
        return (
            <Container>
                <Card style={{ width: '40%' }} className="m-auto">
                    <CardBody>
                        <FormGroup row>
                            <Label sm={3}>Email</Label>
                            <Col sm={9}>
                                <Input type="email" name="email" placeholder="email..." value={email} onChange={e => this.setState({ email: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3}>Password</Label>
                            <Col sm={9}>
                                <Input type="password" name="password" value={password} placeholder="password..." onChange={e => this.setState({ password: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <div className="m-auto">
                            <Link to={"/home"} className="btn btn-primary" onClick={() => this.login(data)} style={{ width: '100%' }} >Login</Link>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.userList
    }
}

export default connect(mapStateToProps)(Login);
