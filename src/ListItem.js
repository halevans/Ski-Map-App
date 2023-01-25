import EditModal from "./EditModal";
import React, { Component } from "react";
import { Button, ListGroupItem } from "react-bootstrap";

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
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <div className="text-wrap">
                        {this.props.title}
                    </div>
                    <div className="d-flex ml-auto">
                        <input
                        className="m-2"
                        type="checkbox"
                        onChange={this.props.toggleSelect}
                        />

                        <Button
                            onClick={this.toggleEditModal} 
                            variant="secondary">Edit</Button>
                        {this.state.showEditModal && (
                        <EditModal
                            text={this.state.text}
                            onSubmit={(e) => this.props.handleEdit(e)}
                            onClose={this.toggleEditModal}
                        />
                        )}

                        <div
                            className="btn"
                            onClick={this.handleFlag}
                            style={{backgroundColor: this.state.backgroundColour}}>
                            <i className="fas fa-flag"></i>
                        </div>

                        <div className="btn" onClick={this.props.handleDelete}>
                            <i className="fas fa-trash"></i>
                        </div>
                    </div>
                </ListGroupItem> 
            </>
        );
    }
}

export default ListItem;
