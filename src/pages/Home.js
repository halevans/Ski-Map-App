import axios from "axios";
import React, { Component } from "react";
import ListContainer from "../ListContainer";
import MapCard from "../MapCard";
import Search from "../Search";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skiArea: ''
        }
    }

    componentDidMount = () => {
        const url = 'https://skimap.org/SkiAreas/view/987.json'; // for Matterhorn Area only
      
        axios.get(url)
            .then((response) => {
                console.log(response)
                // handle success
                // console.log(response)
                this.setState({
                    skiArea: response.data.ski_maps
                })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });   
      }

    render() {
        let map = this.state.skiArea && this.state.skiArea[0].media.sizes[4].url

        return(
            <>
                <h1>Home!</h1>
                <Search />
                <MapCard map={map} />
                <h6>Example Map of Zermatt from API:</h6>
                {!this.state.skiArea && <p>Loading...</p>}
                {this.state.skiArea && <img width="500px" src={this.state.skiArea[0].media.image.url}/>}
                <ListContainer />
            </>
        );
    }
}

export default Home;