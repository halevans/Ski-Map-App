import React, { Component } from "react";
import ListContainer from "./ListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";

class App extends Component {
    render () {
        return(
            <>
                <NavBar/>
                <ListContainer />
            </>
        );
    }
}

export default App;