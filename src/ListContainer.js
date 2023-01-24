import React, { Component } from "react";
import ItemsList from "./ItemsList";
import ListInput from "./ListInput";

class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
            items: [],
            id:0,
            item: ''
        }
    } 
    render() {
        return(
            <>
                <h2>ListContainer</h2>
                <ListInput />
                <ItemsList />
            </>
        );
    }
}

export default ListContainer;