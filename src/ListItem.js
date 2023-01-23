import React, { Component } from "react";

class ListItem extends Component {
    render() {
        return(
            <div className="item-container">
                <div className="buttons-container">
                    <button className="select-button">Select</button>
                    <button className="flag-button">Flag</button>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                </div>

                <div>
                    <h2>{this.props.item}</h2>
                </div>

            </div>
        );
    }
}

export default ListItem;