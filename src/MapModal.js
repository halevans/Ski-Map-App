import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class MapModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
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
                <img className="img-fluid" src={this.props.skiMap.media.image.url}/>
                <h6>Year Published: {this.props.skiMap.metadata.year_published}</h6>
                <p>
                    Official Website: <a href={this.props.skiArea.official_website}>{this.props.skiArea.official_website}</a>
                </p>
            </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MapModal;