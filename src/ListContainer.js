import React, { Component } from "react";
import ItemsList from "./ItemsList";
import ListInput from "./ListInput";

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            items: [],
            id:0,
            item: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    render() {
        return(
            <>
                <h2>ListContainer</h2>
                <ListInput 
                    item={this.state.item}
                    handleChange={this.handleChange} />
                <ItemsList />
            </>
        );
    }
}

export default ListContainer;