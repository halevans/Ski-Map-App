import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import MapCard from "./MapCard";

class MapCardGrid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let allMaps;
        if(this.props.skiArea) {
            allMaps = this.props.skiArea.ski_maps.map((ski_map, index) => {
                return <MapCard
                            skiMap={ski_map}
                            skiArea={this.props.skiArea}
                            key={index}/>
            });
        } 

        return(
            <Container>
                <Row>
                    {allMaps}
                </Row>
            </Container>
        );
    }
}

export default MapCardGrid;