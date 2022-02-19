import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AppDescription extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    const styles = {
      appDescription: {
        display: "flex",
      },
    };

    return (
      <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nom du profil</Form.Label>
                <Form.Control type="profile" placeholder="Entrez le nom de votre profil" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
      </div>

    );
  };
}

export default AppDescription;