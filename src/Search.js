import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";

class Search extends Component {
    render() {
        return(
            <>
                <Container className="mt-2 mb-2">
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button>Search</Button>
                    </Form>
                </Container>
            </>
        );
    }
}

export default Search;