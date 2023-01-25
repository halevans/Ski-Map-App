import React, { Component } from "react";
import ListContainer from "./ListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Home from "./pages/Home";

class App extends Component {
    render () {
        let component;

        console.log(window.location.pathname)

        switch (window.location.pathname) {
            case "/":
                component = <Home />
                break
        }

        return(
            <>
                <NavBar/>
                {component}
            </>
        );
    }
}

export default App;