import React, { Component } from "react";
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
            <>
                {/* <MapCard skiMap={this.props.skiArea}/> */}
                {allMaps}
            </>
        );
    }
}

export default MapCardGrid;