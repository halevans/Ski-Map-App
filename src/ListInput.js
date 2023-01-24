import React, { Component } from "react";

class ListInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add ski resort..."
                        onChange={this.props.handleChange}
                        value={this.props.item} />
                    <button type="submit" className="btn">Add item</button>
                </form>
            </>
        );
    }
}

export default ListInput;