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
          <p>AppDescription</p>
      </div>

    );
  };
}

export default AppDescription;