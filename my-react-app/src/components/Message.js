import React from 'react';

class Message extends React.Component {

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
        <p>
            {this.props.name} : {this.props.message}
        </p>
      </div>

    );
  };
}

export default Message;