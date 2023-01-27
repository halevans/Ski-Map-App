import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import ListContainer from "./ListContainer";

class MapModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                backdrop="static"
                {...this.props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {this.props.skiArea.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="img-fluid" src={this.props.skiMap.media.sizes[0].url}/>
                <p></p>
                <h6>Year Published: {this.props.skiMap.metadata.year_published}</h6>
                <p>
                    <i className="fa-solid fa-calendar-plus"></i> Opening Year: {this.props.skiArea.opening_year}
                <br/>
                    <i className="fa-solid fa-location-dot"></i> Latitude: {this.props.skiArea.latitude}; Longitude: {this.props.skiArea.longitude}
                <br/>
                    <i className="fa-solid fa-globe"></i> Official Website: <a href={this.props.skiArea.official_website}>{this.props.skiArea.official_website}</a>
                </p>
            </Modal.Body>
            <Modal.Body>
                <ListContainer textPreview="Enter a comment here"/>
            </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MapModal;