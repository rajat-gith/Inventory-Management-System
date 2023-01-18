import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate, Link } from "react-router-dom";

function StoreOwner({ owner }) {
  const navigate = useNavigate();

  // const handleStore = () => {
  //   navigate("/home/storeowner");
  // };
  console.log(owner);
  return (
    <div className="StoreOwnerComponent">
      <Paper>
        <Paper
          variant="outlined"
          sx={{ p: 2, m: 1 }}
          className="store_preview"
          key={owner._id}
        >
          <Grid item className="StoreComponent" lg={12} container spacing={1}>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              <Typography>Name: {owner.owner_name}</Typography>
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              <Typography>Store_Count: {owner.store_count}</Typography>
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              {owner.owner_status == "A" ? (
                <div className="A_1">
                  <DoneIcon />
                </div>
              ) : (
                <div className="NA_1">
                  <ClearIcon />
                </div>
              )}
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              <Link to={`/home/storeowner/${owner._id}`}>
                <Button>Stores</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
}

export default StoreOwner;
