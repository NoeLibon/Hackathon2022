import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

class Inscription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          password: "",
          username: "",
          name: "",
          firstname: "",
          modalShow: false,
          setModalShow: false,
        }
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleFirstname(event) {
        this.setState({ firstname: event.target.value });
    }

    handleButtonClicked(event) {
        let data = {
            username: this.state.username,
            first_name: this.state.firstname,
            last_name: this.state.name,
            password: this.state.password,
        }

        fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((response) => {
                toast.success('Utilisateur créé');
            }).catch((error) => {
                toast.error(`Erreur lors de l'inscription ${error}`);
            });
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="firstname" placeholder="Prénom" required value={this.state.firstname} onChange={this.handleFirstname.bind(this)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="name" placeholder="Nom" required value={this.state.name} onChange={this.handleName.bind(this)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nom du profil</Form.Label>
                    <Form.Control type="profile" placeholder="Entrez le nom de votre profil" required value={this.state.username} onChange={this.handleUsername.bind(this)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de passe" required value={this.state.password} onChange={this.handlePassword.bind(this)}/>
                </Form.Group>

                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                    Fermer la fenêtre
                </Button>
                <Button variant="primary" onClick={this.handleButtonClicked.bind(this)}>
                    S'inscrire
                </Button>
                </Modal.Footer>
            </Form>
            </Modal>
        </div>

    );
  };
}

export default Inscription;