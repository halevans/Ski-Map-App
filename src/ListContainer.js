import React, { Component } from "react";
import ItemsList from "./ItemsList";
import ListInput from "./ListInput";

class ListContainer extends Component {
    render() {
        return(
            <>
                Hello from ListContainer
                <ListInput />
                <ItemsList />
            </>
        );
    }
}

export default ListContainer;