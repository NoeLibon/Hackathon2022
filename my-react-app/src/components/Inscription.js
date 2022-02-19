import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import FormOptions from './FormOptions'

class Inscription extends React.Component {

    state = {
        modalShow: false,
        setModalShow: false,
    }

    handleClose() {
        this.setState({ modalShow: false });
    }

    handleShow() {
        this.setState({ modalShow: true });
    }

  render() {
    return (
        <div>
            <Button variant="secondary" onClick={this.handleShow.bind(this)} >
            {this.props.buttonFeature}
            </Button>

            <Modal show={this.state.modalShow} onHide={this.handleClose.bind(this)} animation={true}>
            <Form>
                <Modal.Header closeButton>
                <Modal.Title>Paramètres de l'appareil</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <FormOptions name={this.props.name} ipAddress={this.props.ipAddress} id={this.props.id} groupId={this.props.groupId} type={this.props.type} displayDevice={this.props.displayDevice} />

                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                    Fermer la fenêtre
                </Button>
                <Button variant="primary" onClick={this.handleValidAlertShow.bind(this)} type="submit">
                    Sauvegarder
                </Button>
                </Modal.Footer>
            </Form>
            </Modal>
        </div>

    );
  };
}

export default Inscription;