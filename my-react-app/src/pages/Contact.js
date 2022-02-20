import React from 'react';
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    };

    render() {
        const styles = {
            contentAlignment: {
                margin: "auto",
                padding: "auto",
                textAlign: "center",
                overflow: "hidden",
                height: "100%",
            },
            contentForm: {
                borderRadius: "20px",
                backgroundColor: "#eeeeee",
            },
            contentInput: {
                borderRadius: "4px",
                backgroundColor: "#f9943b",
                color: "black",
            },
        };
        return (
            <div style={styles.contentAlignment}>
                <h1>
                    Liste de mes contacts
                </h1>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Noé</td>
                            <td>Libon</td>
                        </tr>
                        <tr>
                            <td>Emilien</td>
                            <td>Perremans</td>
                        </tr>
                    </tbody>
                </table>
                <br/><hr/><br/>
                <div id="contactAddition">
                    <form id="formResearch" style={styles.contentForm}>
                        <label for="formResearch">
                            <br/>
                            Veuillez entrer le nom d'utilisateur de la personne que vous recherchez
                            <br/>
                                <div className="sideToSide">
                                    <input type="text" name="username" className="orangeButton" placeholder="Nom d'utilisateur" style={styles.contentInput} />
                                    <Button variant="dark" as="input" type="button" className="orangeButton" value="Rechercher" style={styles.contentInput} />
                                </div>
                            <br/>
                        </label>
                    </form>
                    <br/><hr/>
                    <Button variant="dark" as="input" className="orangeButton" type="submit" value="Ajouter un contact" style={styles.contentInput} />
                </div>
            </div>
        );
    };
}

export default Contact;