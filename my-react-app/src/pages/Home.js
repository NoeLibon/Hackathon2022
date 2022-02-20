import React from 'react';
import '../App.css';
import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div id="corps">
                <h1>Accueil</h1>
                <Container>
                    <div id='boutonProfil'>
                    <Form>
                        <p>
                            Sélectionner un secteur:
                        </p>
                        <Form.Select aria-label="Default select example">
                        <option>Tous les secteurs</option>
                        <option value="1">Cuisine</option>
                        <option value="2">Menuisirie</option>
                        <option value="3">Mécanique</option>
                        </Form.Select>
                        <div key="inline-radio" className="mb-3">
                            <Form.Check
                                inline
                                label="Enseigner"
                                name="group1"
                                type="radio"
                                id="inline-radio-1"
                            />
                            <Form.Check
                                inline
                                label="Apprendre"
                                name="group1"
                                type="radio"
                                id="inline-radio-2"
                            />
                            </div>

                <div id='localite'>
                    <p>Proximité :</p><input type="number" step = "1" min="1" max="100"></input>
                </div>
                    <Link to="/Call"><Button className="orangeButton">Commencer l'appel</Button></Link>
                    </Form>
                    <Link to="/Profile"><Button className="orangeButton" id='boutonProfil'>Voir mon profil</Button></Link>
                </div>

                </Container>
                    </div>
        );
    };
}

export default Home;