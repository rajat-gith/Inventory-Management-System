import React, { useEffect, useState } from "react";
import "../css/HomeScreen.css";
import { Link, useNavigate } from "react-router-dom";
import { Card, Grid,Paper } from "@mui/material";
import { useSelector } from "react-redux";


function HomeScreen() {
  const [products, setProducts] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, []);

  return (
    <Grid item className="HomeScreen" lg={12} container spacing={1}>
      {/* <Nav /> */}
      <Paper></Paper>
      <Grid   className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
        <Link to="/home/products/">
          <Card>
            <h2>Products</h2>
            <div className="img_1">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png"
                alt=""
              />
            </div>
          </Card>
        </Link>
      </Grid>

      <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
        <Link to="/home/store">
          <Card>
            <h2>Store</h2>
            <div className="img_1">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-4485535-3728231.png"
                alt=""
              />
            </div>
          </Card>
        </Link>
      </Grid>
      <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
        <Link to="/home/sales">
          <Card>
            <h2>Sales</h2>
            <div className="img_1">
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/salesman-indicating-sales-growth-3181997-2670731.png"
                alt=""
              />
            </div>
          </Card>
        </Link>
      </Grid>
      <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
        <Link to="/home/storeowner">
          <Card>
            <h2>Store Owner</h2>
            <div className="img_1">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-owner-5112603-4269014.png"
                alt=""
              />
            </div>
          </Card>
        </Link>
      </Grid>
      <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
        <Link to="/home/developerprofile">
          <Card>
            <h2>DevProfile</h2>
            <div className="img_1">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/user-account-4924463-4098595.png"
                alt=""
              />
            </div>
          </Card>
        </Link>
      </Grid>
      <Grid className="grid" item sm={12} md={6} lg={4} xl={3} xs={12}>
        <Link to="/home/contactus">
          <Card>
            <h2>Contact US</h2>
            <div className="img_1">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-book-4371904-3626667.png"
                alt=""
              />
            </div>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}

export default HomeScreen;
