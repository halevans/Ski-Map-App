import axios from "axios";
import React, { Component } from "react";
import ListContainer from "../ListContainer";
import MapCardGrid from "../MapCardGrid";
import Search from "../Search";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skiArea: ''
        }
    }

    componentDidMount = () => {
        const url = 'https://skimap.org/SkiAreas/view/987.json'; // 987 for Matterhorn Area only
      
        axios.get(url)
            .then((response) => {
                // handle success
                // console.log(response)
                this.setState({
                    skiArea: response.data
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
                <ListContainer textPreview="Add ski resort to remind you to look it up later..."/>
                {/* <Search /> */}
                <MapCardGrid skiArea={this.state.skiArea} />
            </>
        );
    }
}

export default Home;
