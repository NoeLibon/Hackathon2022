import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormOptions from './FormOptions';
import Inscription from './Inscription';
//f9943b
class LoginForm extends React.Component {

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
            <FormOptions />
            <Button style={styles.button} type="submit">
                Connexion
            </Button>
          </Form>
          <Inscription />
      </div>

    );
  };
}

export default LoginForm;
