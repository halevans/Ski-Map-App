import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";

class ListInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <form onSubmit={this.props.handleSubmit}>
                    <InputGroup className="mb-3">
                        <div className="input-group-text bg-primary">
                    <i className="fa-solid fa-person-skiing text-white"/>
                        </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={this.props.textPreview}
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
