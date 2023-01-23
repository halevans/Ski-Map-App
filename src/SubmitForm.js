import React, { Component } from "react";

class SubmitForm extends Component {
    render() {
        return(
            <>
                <form>
                    <input className="input" placeholder="Add ski resort..." />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default SubmitForm;