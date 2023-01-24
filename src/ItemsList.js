import React, { Component } from "react";
import ListItem from "./ListItem";

class ItemsList extends Component {
    render() {

        const allItems = this.props.items.map((item) => {
            return <ListItem
                        title={item.title}
                        key={item.id}
                        handleDelete={() => this.props.handleDelete(item.id)}
                        handleEdit={(e) => this.props.handleEdit(e, item.id)}
                        toggleSelect={() => this.props.toggleSelect(item.id)}
                         />
        });

        return(
            <>
                <button
                    type="button"
                    className="btn"
                    onClick={this.props.clearList}
                >
                    Clear List
                </button>
                <h3>ItemsList</h3>
                <ul>
                    {allItems}
                </ul>
            </>
        );
    }
}

export default ItemsList;