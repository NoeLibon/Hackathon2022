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
            },
            contentForm: {
                borderRadius: "4px",
                backgroundColor: "black",
            },
            contentInput: {
                borderRadius: "4px",
                backgroundColor: "orange",
                color: "black",
            },
            contentSpan: {
                color: "orange",
            },
        };
        return (
            <div style={styles.contentAlignment}>
                <h1>
                    Liste de mes contacts
                </h1>
                <table  style={styles.contentAlignment}>
                    <thead>
                        <tr>
                            <th>Photo de profil</th>
                            <th>Nom et prénom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Noé Libon</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Emilien Perremans</td>
                        </tr>
                    </tbody>
                </table>
                <br/><hr/>
                <div id="contactAddition">
                    <form id="formResearch" style={styles.contentForm}>
                        <label for="formResearch">
                            <span style={styles.contentSpan}>Veuillez entrer le nom d'utilisateur de la personne que vous recherchez.</span>
                            <br/>
                            <input type="text" name="username" placeholder="Nom d'utilisateur" style={styles.contentInput} />
                            <br/>
                            <Button variant="dark" as="input" type="submit" value="Rechercher" style={styles.contentInput} />
                        </label>
                    </form>
                    <br/><hr/>
                    <Button variant="dark" as="input" type="submit" value="Ajouter un contact" style={styles.contentInput} />
                </div>
            </div>
        );
    };
}

export default Contact;