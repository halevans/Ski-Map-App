import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MatterhornImage from "./../images/matterhorn.png"

class Favourites extends Component {
    render() {
        return(
            <Container>
                <h3>Favourites Page coming soon...</h3>
                <Container className="d-flex justify-content-center">
                    <img width="50%" src={MatterhornImage}/>
                </Container>
            </Container>
        );
    }
}

export default Favourites;