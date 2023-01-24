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
            title: this.state.item,
            selected: false
        }

        this.setState(prevState => ({
            items: [...this.state.items, newItem],
            item: "",
            id: prevState.id + 1
        }));
    }

    clearList = () => {
        if (window.confirm("Are you sure you want to clear the list?")) {
            this.setState({
                items: []
            });
        }
    }

    handleDelete = (id) => {
        const remainingItems = this.state.items.filter((item) => {
            return item.id !== id;
        });
        this.setState({
            items: remainingItems
        });
    }

    handleEdit = (e, id) => {
        e.preventDefault();

        const editIndex = this.state.items.findIndex(x => x.id === id);
        const editedItems = this.state.items.map((item, index) => {
            if (index === editIndex) {
                return {...item, title: e.target.text.value};
            } else {
                return item;
            }
        });

        this.setState({
            items: editedItems
        });
    }

    toggleSelect = (id) => {
        const editIndex = this.state.items.findIndex(x => x.id === id);
        const editedItems = this.state.items.map((item, index) => {
            if (index === editIndex) {
                return {...item, selected: true};
            } else {
                return item;
            }
        });

        this.setState({
            items: editedItems
        });
    }
 
    render() {
        return(
            <>
                <h2>ListContainer</h2>
                <ListInput 
                    item={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
                <ItemsList
                    items={this.state.items}
                    clearList={this.clearList}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    toggleSelect={this.toggleSelect} />
            </>
        );
    }
}

export default ListContainer;