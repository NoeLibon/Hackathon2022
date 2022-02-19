import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//f9943b
class AppDescription extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    const styles = {
      form: {
        margin: "3rem 0",
      },
      button: {
        backgroundColor:"#f9943b",
        borderColor:"#f9943b",
        color:"#000",
      }
    };

    return (
      <div>
          <Form style={styles.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nom du profil</Form.Label>
                <Form.Control type="profile" placeholder="Entrez le nom de votre profil" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" required />
            </Form.Group>

            <Button style={styles.button} type="submit">
                Connexion
            </Button>
          </Form>
          <Button variant="primary" >
              S'inscrire
          </Button>
      </div>

    );
  };
}

export default AppDescription;