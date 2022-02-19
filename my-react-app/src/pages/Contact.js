import React from 'react';
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    };

    render() {
        const STYLES = {
            layout: {
                padding: "10px"
            },
            contentTables: {
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "black"
            }
        }
        return (
            <div style={STYLES.contentTables}>
                <div id="contactTitle">
                    <p>Liste de mes contacts</p>
                </div>
                <div id="contactList">
                    <table style={STYLES.contentTables}>
                        <tr>
                            <td>My picture</td>
                            <td>Noé</td>
                        </tr>
                    </table>
                </div>
                <br/>
                <div id="contactAddition">
                    <Button variant="dark" as="input" type="submit" value="Ajouter un contact" />
                </div>
            </div>
        );
    };
}

export default Contact;