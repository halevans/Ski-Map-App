import React, { Component } from "react";

class ListItem extends Component {
    render() {
        return(
            <>
                <li>
                    <h6>{this.props.item}</h6>
                </li>
                <span onClick={this.props.handleDelete}>
                    <p>Delete</p>
                </span>
            </>
        );
    }
}

export default ListItem; 