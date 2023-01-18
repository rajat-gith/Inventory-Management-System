import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const search = useLocation();



  const submitHandler = (e) => {
    e.preventdefault();

    if (keyword) {
      search.pathname+=(`?keyword=${keyword}`)
    } else {
      search.pathname+=''
    }
  };
  return (
    <Form className="search" onSubmit={submitHandler}>
      <Form.Group controlId="name">
        <div className="searchform">
          <Form.Control
            type="text"
            placeholder="Search"
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
        </div>
      </Form.Group>
      <Button className="searchButton" type="submit" variant="primary">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
