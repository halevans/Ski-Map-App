import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";

class ListInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                    <i className="fas fa-book"/>

                <form onSubmit={this.props.handleSubmit}>
                    <InputGroup className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add ski resort..."
                        onChange={this.props.handleChange}
                        value={this.props.item} />
                    <button type="submit" className="btn btn-primary">Add item</button>
                    </InputGroup>
                </form>
            </>
        );
    }
}

export default ListInput;