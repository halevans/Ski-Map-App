import axios from "axios";
import React, { Component } from "react";
import ListContainer from "../ListContainer";
import Search from "../Search";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maps: ''
        }
    }

    componentDidMount = () => {
        const url = 'https://skimap.org/SkiAreas/view/987.json';
      
        axios.get(url)
            .then((response) => {
                // handle success
                // console.log(response)
                this.setState({
                    maps: response.data.ski_maps
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
        return(
            <>
                <h1>Home!</h1>
                <Search />
                <h6>Example Map of Zermatt from API:</h6>
                {!this.state.maps && <p>Loading...</p>}
                {this.state.maps && <img width="500px" src={this.state.maps[0].media.image.url}/>}
                <ListContainer />
            </>
        );
    }
}

export default Home;