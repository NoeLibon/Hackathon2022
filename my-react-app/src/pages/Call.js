import React from 'react';
import Button from 'react-bootstrap/Button'

class Call extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    };

    render() {
        const STYLES = {
            contentDiv: {
                backgroundColor: "grey",
            },
            contentMargin: {
                marginLeft: "10px",
                width: "100%",
            },
            contentAlign: {
                textAlign: "center",
            },
            contentColumn: {
                columns: 2,
            },
            contentRow: {
                rows: 2,
            },
        };
        return (
            <div>
                <p>Call page</p>
                <div style={STYLES.contentAlign}>
                    <div id="firstName" style={STYLES.contentDiv}>
                        Casse-Couilles
                    </div>
                    <br/>
                    <div id="interaction">
                        <div id="columns" style={STYLES.contentColumn}>
                            <section id="otherCamera" style={STYLES.contentDiv}>
                                coucou
                            </section>
                            <section id="rightSide" style={STYLES.contentRow}>
                                <section id="myCamera" style={STYLES.contentDiv}>
                                    coucou
                                </section>
                                <section id="chat" style={STYLES.contentDiv}>
                                    bonjour
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}

export default Call;