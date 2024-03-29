import React, { Component } from "react";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColour: ""
        }
    }

    removeItem = (e) => {
        console.log("handling delete item...");
        console.log(e.currentTarget);
        // this.props.removeItem();
    }

    flagItem = () => {
        if (this.state.backgroundColour === "") {
            this.setState({
                backgroundColour: "rgb(255, 0, 0, 0.5)"
            })
        } else {
            this.setState({
                backgroundColour: ""
            })
        }
    }

    render() {
        return(
            <div className="item-container">
                <div className="buttons-container">
                    <button className="select-button">Select</button>
                    <button className="flag-button" onClick={this.flagItem}>Flag</button>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button" onClick={this.removeItem}>Delete</button>
                </div>

                <div style={{backgroundColor: this.state.backgroundColour}}>
                    <h2>{this.props.item}</h2>
                </div>

            </div>
        );
    }
}

export default ListItem;