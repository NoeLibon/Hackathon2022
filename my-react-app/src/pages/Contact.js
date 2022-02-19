import React from 'react';
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <div id="contactTitle">
                    <p>Liste de mes contacts</p>
                </div>
                <div id="contactList">
                    <table>
                        <tr>
                            <td>My picture</td>
                            <td>Noé</td>
                        </tr>
                    </table>
                </div>
                <div id="contactAddition">
                    <form id="formResearch">
                        <label for="formResearch">
                            Veuillez entrer le nom d'utilisateur de la personne que vous recherchez.
                            <input type="text" name="name" />
                            <Button variant="primary" as="input" type="submit" value="Rechercher" />
                        </label>
                    </form>
                    <Button variant="primary" as="input" type="submit" value="Ajouter un contact" />
                </div>
            </div>
        );
    };
}

export default Contact;