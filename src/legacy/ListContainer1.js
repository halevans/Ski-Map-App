import React, { Component } from "react";
import ListItem from "./ListItem1";

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            newItem: "",
            taskCount: 0
        }
    }

    addItemChange = (e) => {
        this.setState({
            newItem: e.target.value
        });
    }

    addItem = (e) => {
        e.preventDefault();

        if (this.inputElement !== "") {
            this.setState({
                items: [...this.state.items, this.state.newItem],
                newItem: ""
            });
        }
    }

    removeItem = (item) => {
        console.log("handling delete item...");
        const items = this.state.items.slice();
        const itemIndex = items.indexOf(item);
        console.log(item);
    }

    render() {

        // to remove later, initialise items in list
        const initialItems = [ 
            {id: 1, title: "Item 1", status: false},
            {id: 2, title: "Item 2", status: false}
        ]

        const allItems = this.state.items.map((item, index) => {
            return <ListItem
                        item={item}
                        key={index}
                        removeItem={this.removeItem} />
        });

        return(
            <>
                <form>
                    <input
                        className="input"
                        placeholder="Add ski resort..."
                        onChange={this.addItemChange}
                        value={this.state.newItem} />
                    <button
                        className="submit-button"
                        onClick={this.addItem}>Submit</button>
                </form>

                <ul>
                    {allItems}
                </ul>
            </>
        );
    }
}

export default ListContainer;