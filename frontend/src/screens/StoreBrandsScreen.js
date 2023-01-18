import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeDetails } from "../actions/storeActions";
import { useLocation } from "react-router-dom";
import { Paper, Grid, Typography, Button, Modal, Card } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

function StoreBrandsScreen() {
  const dispatch = useDispatch();
  const storeDetail = useSelector((state) => state.storeDetils);
  const { loading, store } = storeDetail;
  const search = useLocation();

  useEffect(() => {
    dispatch(storeDetails(search.pathname.split("/")[3]));
    console.log(store);
  }, [dispatch]);

  return (
    <div className="StoreDetails">
      <h3>STORE DETAILS</h3>
      {loading ? null : (
        <div>
          <Paper variant="outlined" sx={{ p: 2, m: 1 }} key={store._id}>
            <Grid item className="StoreComponent" lg={12} container spacing={1}>
              <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
                <Typography>Name: {store.name}</Typography>
              </Grid>
              <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
                <Typography>Owner: {store.owner.owner_name}</Typography>
              </Grid>
              <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
                <Typography>Tagline: {store.tagline}</Typography>
              </Grid>
              <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
                {store.status == "A" ? (
                  <div className="A_1">
                    <DoneIcon />
                  </div>
                ) : (
                  <div className="NA_1">
                    <ClearIcon />
                  </div>
                )}
              </Grid>
            </Grid>
          </Paper>
          <h3>BRANDS AVAILABLE</h3>
          {Array.isArray(store.brands)
            ? store.brands.map((brand) => (
                <Paper
                  variant="outlined"
                  elevation={3}
                  sx={{ p: 2, m: 1 }}
                  key={store._id}
                >
                  <Grid
                    item
                    className="BrandComponent"
                    lg={12}
                    container
                    spacing={1}
                  >
                    <Grid
                      className="grid"
                      item
                      sm={12}
                      md={6}
                      lg={4}
                      xl={3}
                      xs={12}
                    >
                      <Typography>{brand._id}</Typography>
                    </Grid>
                    <Grid
                      className="grid"
                      item
                      sm={12}
                      md={6}
                      lg={4}
                      xl={3}
                      xs={12}
                    >
                      <Typography> Name: {brand.name}</Typography>
                    </Grid>
                    <Grid
                      className="grid"
                      item
                      sm={12}
                      md={6}
                      lg={4}
                      xl={3}
                      xs={12}
                    >
                      <Typography>Quantity: {brand.quantity}</Typography>
                    </Grid>
                    <Grid
                      className="grid"
                      item
                      sm={12}
                      md={6}
                      lg={4}
                      xl={3}
                      xs={12}
                    >
                      {brand.status == "A" ? (
                        <div className="A_1">
                          <DoneIcon />
                        </div>
                      ) : (
                        <div className="NA_1">
                          <ClearIcon />
                        </div>
                      )}
                    </Grid>
                  </Grid>
                </Paper>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default StoreBrandsScreen;
