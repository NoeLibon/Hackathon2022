import React from 'react';
import '../App.css';
import { Button, Col, Container, Row, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Accueil</h1>
                <Container>
                    <div id='boutonProfil'>
                   <Link to="/Profile"><Button className="orangeButton" id='boutonProfil'>Voir mon profil</Button></Link>

                    <form>
                        <input type="checkbox" name='Teach' id='teach'></input> <label for="teach">Teach</label>
                        <input type="checkbox" name='Learn' id='learn' checked></input> <label for="teach">Learn</label> 

                        <Row>
                    <p>secteurs : </p>
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
                        <Col><Button className="orangeButton">Teach</Button></Col>
                        <Col><Button className="orangeButton">Learn</Button></Col>
                    </Row>
                <div id='localite'>
                    <p>Proximité :</p><input type="number" step = "10" legend="0"></input>
                </div>
                   <Link to="/Call"><Button className="orangeButton">Commencer l'appel</Button></Link>
                    </form>






                    </div>

                </Container>
                    </div>
        );
    };
}

export default Home;