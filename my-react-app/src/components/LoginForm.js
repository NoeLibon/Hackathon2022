import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Inscription from './Inscription';
import { toast } from 'react-toastify';
import login from '../App';
import { Link } from 'react-router-dom';
//f9943b
class LoginForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        password: "",
        username: "",
      }
  }

  handleButtonClicked(event) {
    let data = {
        username: this.state.username,
        password: this.state.password,
    }

    fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) => {
        login(this.state.username);
        }).catch((error) => {
            toast.error(`Erreur lors de l'inscription ${error}`);
        });
  }

  handlePassword(event) {
      this.setState({ password: event.target.value });
  }

  handleUsername(event) {
      this.setState({ username: event.target.value });
  }

  render() {
    const styles = {
      form: {
        margin: "3rem 0",
      }
    };

    return (
      <div>
          <Form style={styles.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom du profil</Form.Label>
              <Form.Control type="profile" placeholder="Entrez le nom de votre profil" required value={this.state.username} onChange={this.handleUsername.bind(this)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" required value={this.state.password} onChange={this.handlePassword.bind(this)}/>
          </Form.Group>
            <Link to="/Home">
            <Button className="orangeButton" > {/* onClick={this.handleButtonClicked.bind(this)} */}
                Connexion
            </Button></Link>
          </Form>
          <Inscription />
      </div>

    );
  };
}

export default LoginForm;
