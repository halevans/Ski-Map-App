import React, { Component } from "react";
import ListItem from "./ListItem";

class ItemsList extends Component {
    render() {
        return(
            <>
                <h3>ItemsList</h3>
                <ul>
                    <ListItem />
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