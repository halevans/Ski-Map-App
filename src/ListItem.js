import EditModal from "./EditModal";
import React, { Component } from "react";
import { ListGroupItem } from "react-bootstrap";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
            flagged: false,
            backgroundColour: ""
        }
    }

    handleFlag = () => {
        if (this.state.backgroundColour === "") {
            this.setState({
                flagged: true,
                backgroundColour: "rgb(255, 0, 0, 0.5)"
            });
        } else {
            this.setState({
                flagged: false,
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
                <ListGroupItem className="d-flex justify-content-between my-2">
                    <h6>{this.props.title}</h6>
                    <div className="d-flex ml-auto">
                            <input 
                            type="checkbox"
                            onChange={this.props.toggleSelect}
                            />
                            <div onClick={this.props.handleDelete}>
                                <i className="fas fa-trash"></i>
                            </div>
                        <span>
                                <button onClick={this.toggleEditModal}>Edit</button>
                                {this.state.showEditModal && (
                                <EditModal
                                    text={this.state.text}
                                    onSubmit={(e) => this.props.handleEdit(e)}
                                    onClose={this.toggleEditModal}
                                />
                            )}
                        </span>
                        <div
                            onClick={this.handleFlag}
                            style={{backgroundColor: this.state.backgroundColour}}>
                            <i className="fas fa-flag"></i>
                        </div>
                    </div>
                </ListGroupItem> 
            </>
        );
    }
}

export default ListItem;
