import React, { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";

class ItemsList extends Component {
    render() {

        const allItems = this.props.items.map((item) => {
            return <ListItem
                        title={item.title}
                        key={item.id}
                        handleDelete={() => this.props.handleDelete(item.id)}
                        handleEdit={(e) => this.props.handleEdit(e, item.id)}
                        toggleSelect={() => this.props.toggleSelect(item.id)}
                         />
        });

        return(
            <>
                <Button onClick={this.props.clearList}>
                    Clear List
                </Button>{' '}
                <Button onClick={this.props.deleteSelected}>
                    Delete Selected
                </Button>{' '}
                <ListGroup className="mt-2">
                    {allItems}
                </ListGroup>
            </>
        );
    }
}

export default ItemsList;