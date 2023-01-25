import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

class App extends Component {
    render () {
        return(
            <>
                <NavBar/>
                <Routes>
                    <Route exact path="" element={<Home />} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </>
        );
    }
}

export default App;