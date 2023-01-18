import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
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
  Grid,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Product = ({ product }) => {
  // const [quantity,setQuantity]=useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="product_list">
      <div className="product_box" key={product._id}>
        <Paper
          variant="outlined"
          sx={{ p: 2, m: 1 }}
          elevation={3}
          className="product_details"
        >
          <Grid item className="ProductComponent" lg={12} container spacing={1}>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
              <Typography>{product._id}</Typography>
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
              <Typography>Name: {product.product_name}</Typography>
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
              <Typography>Category: {product.category}</Typography>
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
              <button onClick={handleOpen}>More Info</button>
            </Grid>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{ ...style, width: 200 }}>
              <h2 id="modal-modal-title">{product.product_name}</h2>
              <TableContainer id="modal-modal-description" component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Id</TableCell>
                      <TableCell>{product._id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Product Brand</TableCell>
                      <TableCell> {product.brand["name"]}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Quantity</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Colour</TableCell>
                      <TableCell>{product.color}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Price</TableCell>
                      <TableCell>{product.price}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </Modal>
        </Paper>
      </div>
    </div>
  );
};

export default Product;
