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
                            <br/><br/>
                            <input type="text" name="username" placeholder="Nom d'utilisateur" style={styles.contentInput} />
                            <br/><br/>
                            <Button variant="dark" as="input" type="button" value="Rechercher" style={styles.contentInput} />
                            <br/><br/>
                        </label>
                    </form>
                    <br/><hr/><br/>
                    <Button variant="dark" as="input" type="submit" value="Ajouter un contact" style={styles.contentInput} />
                </div>
            </div>
        );
    };
}

export default Contact;