import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Search extends Component {
    render() {
        return(
            <>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button>Search</Button>
                </Form>
            </>
        );
    }
}

export default Search;