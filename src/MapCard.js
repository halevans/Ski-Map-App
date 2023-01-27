import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import MapModal from "./MapModal";

class MapCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapModalShow: false
        }
    }

    toggleModalOpen = () => {
        this.setState({
            mapModalShow: true
        });
    }

    toggleModalClose = (e) => {
        e.stopPropagation();
        this.setState({
            mapModalShow: false
        });
    }

    render() {
        return(
            <>
                <Card 
                    onClick={this.toggleModalOpen}
                    className="p-0 m-1 "
                    style={{ width: '18rem' }}
                    type="button">
                    {this.props.skiMap && <Card.Img variant="top" style={{ height: '5rem', objectFit: 'cover'}} src={this.props.skiMap.media.sizes[4].url} />}
                    <Card.Body>
                        {this.props.skiArea && <Card.Title>{this.props.skiArea.name}</Card.Title>}
                        {this.props.skiMap && <Card.Subtitle>Year Published: {this.props.skiMap.metadata.year_published}</Card.Subtitle>}
                        <MapModal
                            show={this.state.mapModalShow}
                            onHide={this.toggleModalClose}
                            skiMap={this.props.skiMap}
                            skiArea={this.props.skiArea}
                        />
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default MapCard;
