import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import Product from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProductScreen.css";
import { listProducts, createProduct } from "../actions/productActions";
import { Link } from "react-router-dom";
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
} from "../constants/productConstants";

import {
  Card,
  Box,
  Button,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Modal,
  Container,
  Input,
  TextField,
} from "@mui/material";
import SearchBox from "../components/SearchBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingTop:1
};

function ProductScreen() {
  const dispatch = useDispatch();
  const [product_name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [colour, setColour] = useState("");
  const [cat, setCat] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();
  const search = useLocation();
  const keyword = search.search;
  console.log(search.search);

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const handleClick = (e) => {
    navigate("/home/products");
  };

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errrorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    console.log(products);
    if (userInfo) {
      dispatch(listProducts(keyword));
    } else {
      alert("Not Logged IN");
    }
    if (products) {
      handleClick();
    }
  }, [dispatch]);
  console.log(products);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct(colour, cat, brand, quantity, price, product_name, desc)
    );
  };

  const [buttonDesc, setButtonDesc] = useState(false);

  return (
    <div className="ProductScreen">
      <h2>Products Panel</h2>
      <button className="addButton" onClick={handleOpen}>
        Add Product
      </button>
      {/* <h5>Click to Show Details of the Product</h5> */}
      <SearchBox></SearchBox>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          variant="outlined"
          sx={{ ...style, width: { xl: 500, xs: 230, sm: 400 } }}
        >
          <Container id="modal-modal-description" component={Paper}>
            <Form className="addform" onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    placeholder="Enter Product Name"
                    value={product_name}
                    onChange={(e) => setName(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Form.Group controlId="brand">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Brand"
                    variant="outlined"
                    placeholder="Enter Product Brand."
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Form.Group controlId="quantity">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Quantity"
                    variant="outlined"
                    placeholder="Enter Product Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Form.Group controlId="price">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    placeholder="Enter Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Form.Group controlId="colour">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Colour"
                    variant="outlined"
                    placeholder="Enter Product Colour"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Form.Group controlId="cat">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Category"
                    variant="outlined"
                    placeholder="Enter Product Cat"
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Form.Group controlId="desc">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    placeholder="Enter Product Desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Button type="submit" variant="primary">
                Add
              </Button>
            </Form>
            <Button onClick={handleClose}>Close</Button>
          </Container>
        </Paper>
      </Modal>
      {products && Array.isArray(products)
        ? products.map((product) => (
            <Product product={product} triggerValue={buttonDesc} />
          ))
        : null}
    </div>
  );
}

export default ProductScreen;
