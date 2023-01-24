import React, { Component } from "react";

class ListInput extends Component {
    render() {
        return(
            <>
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add ski resort..." />
                    <button type="submit" className="btn">Add item</button>
                </form>
            </>
        );
    }
}

export default ListInput;