import React from 'react';
import Container from 'react-bootstrap/Container';
import AppDescription from '../components/AppDescription';
import LoginForm from '../components/LoginForm';

class Index extends React.Component {

  render() {
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