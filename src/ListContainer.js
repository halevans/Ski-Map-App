import React, { Component } from "react";
import ItemsList from "./ItemsList";
import ListInput from "./ListInput";

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id:0,
            item: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const newItem = {
            id: this.state.id,
            item: this.state.item
        }

        this.setState({
            items: [...this.state.items, this.state.item],
            item: "",
            id: this.state.id + 1
        })

        console.log(this.state.id)
    }
 
    render() {
        return(
            <>
                <h2>ListContainer</h2>
                <ListInput 
                    item={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
                <ItemsList items={this.state.items} />
            </>
        );
    }
}

export default ListContainer;