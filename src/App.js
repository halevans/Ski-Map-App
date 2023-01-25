import React, { Component } from "react";
import ListContainer from "./ListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render () {
        return(
            <>
                <h1>Ski App</h1>
                <ListContainer />
            </>
        );
    }
}

export default App; 