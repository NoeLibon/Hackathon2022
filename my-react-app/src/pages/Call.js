import React from 'react';
import "../App.css";
import { Button, Container, Row, Col } from 'react-bootstrap'

class Call extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    };

    componentDidMount() {
        var video = document.getElementById('video'),
            vendorUrl = window.URL || window.webkitURL;
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                }).catch(function (error) {
                console.log("Something went wrong!");
            });
        }
    }

    render() {
        const styles = {
            contentForm: {
                borderRadius: "20px",
                backgroundColor: "#eeeeee",
            },
            contentInput: {
                borderRadius: "4px",
                backgroundColor: "#f9943b",
                color: "black",
            },
            camerasAndChat: {
                display: "flex",
                flexDirection: "row",
            },
            otherCamera: {
                display: "flex",
                height: "86%",
                width: "70%",
                backgroundColor: "#f9943b",
            },
            camAndChat: {
                display: "flex",
                height: "86%",
                width: "30%",
                flexDirection: "column",
                backgroundColor: "blue",
            },
            myCam: {
                display: "flex",
                height: "30%",
                backgroundColor: "orange",
            },
            chat: {
                display: "flex",
                flexDirection: "column-reverse",
                height: "70%",
                backgroundColor: "green",
            },
            body: {
                overflow: "hidden",
            },
        };
        return (
            <div style={styles.body}>
                <h1>
                    En appel avec Severin
                </h1>
                <br/>
                <Container id="camerasAndChat" style={styles.camerasAndChat}>
                    <div id="otherCam" style={styles.otherCamera}>
                    </div>
                    <div id="camAndChat" style={styles.camAndChat}>
                        <div style={styles.myCam}>
                            <video id="video" width="100%"
                                   height="100%" autoPlay>
                            </video>
                        </div>
                        <div style={styles.chat}>
                            <input style={styles.input} type={"text"}/>
                        </div>
                    </div>
                </Container>
            </div>

        );
    };
}

export default Call;