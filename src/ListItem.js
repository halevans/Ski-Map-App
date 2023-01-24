import EditModal from "./EditModal";
import React, { Component } from "react";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
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

    toggleEditModal = () => {
        this.setState(prevState => ({
          showEditModal: !prevState.showEditModal
        }));
      }

    render() {
        return(
            <>
                <li>
                    <h6>{this.props.title}</h6>
                </li>
                <span onClick={this.props.handleDelete}>
                    <p>Delete</p>
                </span>
                <span onClick={this.props.handleEdit}>
                    <p>Edit</p>
                </span>
                <div>
                    <button onClick={this.toggleEditModal}>Edit</button>
                    {this.state.showEditModal && (
                    <EditModal
                        text={this.state.text}
                        onSubmit={(e) => this.props.handleEdit(e)}
                        onClose={this.toggleEditModal}
                    />
                    )}
                </div>
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
