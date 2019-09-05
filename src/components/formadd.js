import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

import { getAllCategory } from '../publics/redux/actions/category'
import { addMenu, getAllMenu } from '../publics/redux/actions/menu'
export class Formadd extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            menus: [],
            categories: [],
            name: '',
            image: '',
            price: 0,
            category: 1,
        }
    }

    onChangeFile = (e) => {
        console.log(e.target.files[0])
        this.setState({
            image: e.target.files[0],
            loaded: 0,
        })
    }

    async componentDidMount() {
        await this.requestCategories()
    }

    componentWillMount() {
        this.requestMenu()
    }

    requestMenu() {
        this.props.dispatch(getAllMenu())
            .then(() => {
                this.setState({
                    menus: this.props.menu,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log('error ', error)
            })
    }

    requestCategories() {
        this.props.dispatch(getAllCategory())
            .then(() => {
                this.setState({
                    categories: this.props.category
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    addMenu(formdata) {
        this.props.dispatch(addMenu(formdata))
            .then(() => {
                Swal.fire({
                    type: 'success',
                    title: 'Add Menu',
                    text: 'Success Add Menu!',
                })
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    type: 'error',
                    title: 'Add Menu',
                    text: 'Failed To Add Menu'
                })
            })
    }

    render() {
        const { categories, name, image, price, category } = this.state
        console.log('categories: ', categories)
        let formdata = new FormData()
        formdata.append('name', name)
        formdata.append('image', image)
        formdata.append('price', price)
        formdata.append('id_category', category)
        formdata.append('id_user', 2)
        formdata.append('created_at', new Date())
        formdata.append('updated_at', new Date())
        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" value={name} onChange={e => this.setState({ name: e.target.value })} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Image</Label>
                    <Col sm={10}>
                        <Input type="file" name="image" onChange={this.onChangeFile} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Price</Label>
                    <Col sm={10}>
                        <Input type="number" name="price" value={price} onChange={e => this.setState({ price: e.target.valueAsNumber })} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                    <Col sm={10}>
                        <select type="select" name="select" className="form-control" onSelect={category => this.setState({ category })}>
                            {
                                categories &&
                                    categories.length > 0 ?
                                    categories.map((item, key) => {
                                        return (
                                            <option value={item.id} key={key}>{item.name}</option>
                                        )
                                    })
                                    :
                                    <option>Oops no data!</option>
                            }
                        </select>
                    </Col>
                </FormGroup>
                <FormGroup check row className="mt-4">
                    <Col>
                        <Button className="float-right" style={{ backgroundColor: '#F24F8A', borderColor: 'transparent' }} onClick={() => this.addMenu(formdata)}>Add</Button>
                    </Col>
                    <Col>
                        <Button className="float-right mr-3" style={{ backgroundColor: '#57CAD5', borderColor: 'transparent' }}>Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        menu: state.category.menuList,
        category: state.category.catList
    }
}

export default connect(mapStateToProps)(Formadd)