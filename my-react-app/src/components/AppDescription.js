import React from 'react';

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
        <h1>Part'âge</h1>
        <h4>Transmettez votre expérience à d'autres personnes</h4>
        <h3>Ou..</h3>
        <h4>Apprenez quelque chose de nouveau</h4>
      </div>

    );
  };
}

export default AppDescription;