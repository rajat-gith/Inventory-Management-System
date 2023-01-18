import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSales,createSales } from "../actions/salesActions";
import { Form } from "react-bootstrap";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import SalesComponent from "../components/SalesComponent";

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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingTop: 1,
};

function SalesScreen() {
  const dispatch = useDispatch();
  const saleslist = useSelector((state) => state.salesList);
  const { error, loading, sales } = saleslist;
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [source, setSource] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(listSales());
    console.log(sales[0]);
    console.log(sales);
    {
      sales.map((sale) => console.log(sale));
    }
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createSales(date, destination, source, quantity)
    );
  };

  return (
    <div className="SalesScreen">
      <h3>Sales Details</h3>
      <button className="addButton" onClick={handleOpen}>
        Add New Sales
      </button>
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
                    type="datetime-local"
                    id="outlined-basic"
                    label="Date"
                    variant="outlined"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Form.Group controlId="brand">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Destination"
                    variant="outlined"
                    placeholder="Enter Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  ></TextField>
                </div>
              </Form.Group>
              <Form.Group controlId="quantity">
                <div className="group">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Source"
                    variant="outlined"
                    placeholder="Enter Source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
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
                    placeholder="Enter Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
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

      {sales.map((sale) => (
        <SalesComponent sales={sale}></SalesComponent>
      ))}
    </div>
  );
}

export default SalesScreen;
