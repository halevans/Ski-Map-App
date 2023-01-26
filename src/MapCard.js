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

    toggleModalShow = () => {
        if (this.state.mapModalShow) {
            this.setState({
                mapModalShow: false
            });
        } else if (!this.state.mapModalShow) {
            this.setState({
                mapModalShow: true
            });
        }
    }

    render() {
        return(
            <>
                <Card 
                    onClick={this.toggleModalShow}
                    className="p-0 m-1 "
                    style={{ width: '18rem' }}
                    type="button">
                    {this.props.skiMap && <Card.Img variant="top" style={{ height: '10rem', 'object-fit': 'cover'}} src={this.props.skiMap.media.sizes[4].url} />}
                    <Card.Body>
                        {this.props.skiArea && <Card.Title>{this.props.skiArea.name}</Card.Title>}
                        {this.props.skiMap && <Card.Subtitle>Year Published: {this.props.skiMap.metadata.year_published}</Card.Subtitle>}
                        <MapModal
                            show={this.state.mapModalShow}
                            onHide={this.toggleModalShow}
                        />
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default MapCard;
