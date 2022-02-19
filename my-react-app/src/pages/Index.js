import React from 'react';
import AppDescription from '../components/AppDescription';
import LoginForm from '../components/LoginForm';

class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <div>
        <AppDescription />
        <LoginForm />
      </div>

    );
  };
}

export default Index;