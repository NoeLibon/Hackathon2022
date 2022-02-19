import React from 'react';
import Container from 'react-bootstrap/Container';
import AppDescription from '../components/AppDescription';
import LoginForm from '../components/LoginForm';

class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    const styles = {
    }
    return (
      <div>
        <Container>
          <AppDescription />
          <LoginForm />
        </Container>
      </div>

    );
  };
}

export default Index;