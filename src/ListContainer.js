import React, { Component } from "react";
import ListItem from "./ListItem";

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            newItem: '',
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
                newItem: ''
            });
        }
    }

    render() {

        const allItems = this.state.items.map((item, index) => {
            return <ListItem item={item} key={index}/>
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