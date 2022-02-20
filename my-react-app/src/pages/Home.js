import React from 'react';
import '../App.css';
import { Button, Col, Container, Row, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div id="corps">
                <h1>Accueil</h1>
                <Container>
                    <div id='boutonProfil'>
                    <form>
                        <p>
                            Sélectionner un secteur:
                        </p>
                        <Row>
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Tous les secteurs
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Cuisine</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Menuisirie</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Informatique</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                    <Row>
                        <Col><Button className="orangeButton">Préférence pour enseigner</Button></Col>
                        <Col><Button className="orangeButton">Préférence pour apprendre</Button></Col>
                    </Row>
                <div id='localite'>
                    <p>Proximité :</p><input type="number" step = "1" min="1" max="100"></input>
                </div>

                    </form>
<Link to="/Profile"><Button className="orangeButton" id='boutonProfil'>Voir mon profil</Button></Link>





                    </div>

                </Container>
                    </div>
        );
    };
}

export default Home;