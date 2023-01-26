import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class MapCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Card style={{ width: '18rem' }}>
                    {this.props.skiArea && <Card.Img variant="top" src={this.props.skiArea.ski_maps[0].media.sizes[4].url} />}
                    <Card.Body>
                        {this.props.skiArea && <Card.Title>{this.props.skiArea.name}</Card.Title>}
                        {this.props.skiArea && <Card.Subtitle>Year Published: {this.props.skiArea.ski_maps[0].metadata.year_published}</Card.Subtitle>}
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
            </>
        );
    }
}

export default MapCard;