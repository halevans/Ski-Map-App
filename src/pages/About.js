import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AboutImage from "./../images/about-page-placeholder.jpg"

class About extends Component {
    render() {
        return(
            <Container>
                <h3>About Page coming soon...</h3>
                <Container className="d-flex justify-content-center">
                    <img width="50%" src={AboutImage}/>
                </Container>
            </Container>
        );
    }
}

export default About;