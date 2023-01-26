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
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
            </>
        );
    }
}

export default MapCard;