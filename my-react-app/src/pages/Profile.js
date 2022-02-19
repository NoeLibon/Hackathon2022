import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <Link to="/Home"><Button className="orangeButton">Retour à l'accueil</Button></Link>
      </div>

    );
  };
}

export default Profile;