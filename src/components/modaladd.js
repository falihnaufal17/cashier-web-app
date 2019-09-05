import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Formadd from './formadd';

class Modaladd extends React.Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} centered>
                    <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Formadd />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Modaladd;