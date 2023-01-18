import React, { useState } from "react";
import { Paper, Grid, Typography, Button, Modal, Card } from "@mui/material";

function SalesComponent({ sales }) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="SalesComponent">
      <Paper
        variant="outlined"
        sx={{ p: 2, m: 1 }}
        elevation={3}
        className="product_details"
      >
        <Grid item className="SalesGrid" lg={12} container spacing={1}>
          <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
            <Typography>Date:{sales.date_of_dispatch}</Typography>
          </Grid>
          <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
            <Typography>Destination: {sales.destination_store.name}</Typography>
          </Grid>
          <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
            <Typography>Source: {sales.depart_store.name}</Typography>
          </Grid>
          <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
            <Typography>
              Shipment Qunatity: {sales.quantity_shipment}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default SalesComponent;
