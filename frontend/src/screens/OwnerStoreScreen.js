import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listStores } from "../actions/storeActions";
import { Paper, Grid, Typography, Card } from "@mui/material";
import { useLocation } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

function OwnerStoreScreen() {
  const dispatch = useDispatch();
  const storeList = useSelector((state) => state.storeList);
  const { error, loading, stores } = storeList;
  const search = useLocation();
  const storearray = [];

  console.log(stores);
  useEffect(() => {
    dispatch(listStores());
    // console.log(typeof(search.pathname.split("/")[3]));
    // console.log(typeof(stores[0].owner._id));
  }, []);
  stores.map((store) =>
    Number(store.owner._id) == search.pathname.split("/")[3]
      ? storearray.push(store)
      : null
  );

  return (
    <div className="OwnerStoreScreen">
      <Typography variant="h5"> Stores </Typography>
      {storearray &&
        storearray.map((store) => (
          <div>
            <Paper className="store_preview" key={store._id}>
              <Grid
                item
                className="StoreComponent"
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
                  xl={2.4}
                  xs={12}
                >
                  <Typography>Name: {store.name}</Typography>
                </Grid>
                <Grid
                  className="grid"
                  item
                  sm={12}
                  md={6}
                  lg={4}
                  xl={2.4}
                  xs={12}
                >
                  <Typography>Owner:{store.owner.owner_name}</Typography>
                </Grid>
                <Grid
                  className="grid"
                  item
                  sm={12}
                  md={6}
                  lg={4}
                  xl={2.4}
                  xs={12}
                >
                  <Typography>Tagline: {store.tagline}</Typography>
                </Grid>
                <Grid
                  className="grid"
                  item
                  sm={12}
                  md={6}
                  lg={4}
                  xl={2.4}
                  xs={12}
                >
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
          </div>
        ))}
    </div>
  );
}

export default OwnerStoreScreen;
