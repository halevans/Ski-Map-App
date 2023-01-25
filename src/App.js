import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import About from "./pages/About";

class App extends Component {
    render () {
        let component;
        switch (window.location.pathname) {
            case "/":
                component = <Home />;
                break;
            case "/favourites":
                component = <Favourites />;
                break;
            case "/about":
                component = <About />;
                break;
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