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
            <Button variant="secondary" id="inscription" onClick={this.handleShow.bind(this)} >
                S'inscrire
            </Button>

            <Modal show={this.state.modalShow} onHide={this.handleClose.bind(this)} animation={true}>
            <Form>
                <Modal.Header closeButton>
                <Modal.Title>Inscription</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <FormOptions />

                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                    Fermer la fenêtre
                </Button>
                <Button variant="primary" type="submit">
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