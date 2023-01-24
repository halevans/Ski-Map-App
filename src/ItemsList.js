import React, { Component } from "react";
import ListItem from "./ListItem";

class ItemsList extends Component {
    render() {

        const allItems = this.props.items.map((item) => {
            return <ListItem item={item.title} key={item.id} />
        });

        return(
            <>
                <h3>ItemsList</h3>
                <ul>
                    {allItems}
                </ul>
            </>
        );
    }
}

export default ItemsList;