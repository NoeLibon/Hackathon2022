import React from 'react';
import Form from 'react-bootstrap/Form';

class FormOptions extends React.Component {

  render() {
    return (
      <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nom du profil</Form.Label>
            <Form.Control type="profile" placeholder="Entrez le nom de votre profil" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe" required />
        </Form.Group>
      </div>

    );
  };
}

export default FormOptions;