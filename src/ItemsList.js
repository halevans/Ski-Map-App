import React, { Component } from "react";
import ListItem from "./ListItem";

class ItemsList extends Component {
    render() {

        const allItems = this.props.items.map((item, index) => {
            return <ListItem item={item} key={index} />
        });

        return(
            <>
                <h3>ItemsList</h3>
                <ul>
                    {allItems}
                </ul>
                <button
                    type="button"
                    className="btn"
                >
                    Clear List
                </button>
            </>
        );
    }
}

export default ItemsList;