import React, { Component } from "react";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColour: ""
        }
    }

    handleFlag = () => {
        if (this.state.backgroundColour === "") {
            this.setState({
                backgroundColour: "rgb(255, 0, 0, 0.5)"
            });
        } else {
            this.setState({
                backgroundColour: ""
            });
        }
    }

    render() {
        return(
            <>
                <li>
                    <h6>{this.props.item}</h6>
                </li>
                <span onClick={this.props.handleDelete}>
                    <p>Delete</p>
                </span>
                <span onClick={this.props.handleEdit}>
                    <p>Edit</p>
                </span>
                <div
                    onClick={this.handleFlag}
                    style={{backgroundColor: this.state.backgroundColour}}>
                    <p>Flag</p>
                </div>
            </>
        );
    }
}

export default ListItem; 