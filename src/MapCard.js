import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class MapCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Card 
                    className="p-0 m-1"
                    style={{ width: '18rem' }}>
                    {this.props.skiMap && <Card.Img variant="top" style={{ height: '10rem', 'object-fit': 'cover'}} src={this.props.skiMap.media.sizes[4].url} />}
                    <Card.Body>
                        {this.props.skiArea && <Card.Title>{this.props.skiArea.name}</Card.Title>}
                        {this.props.skiMap && <Card.Subtitle>Year Published: {this.props.skiMap.metadata.year_published}</Card.Subtitle>}
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default MapCard;
