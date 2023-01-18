import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listStoreOwners } from "../actions/storeActions";
import SearchBox from "../components/SearchBox";
import StoreOwner from "../components/StoreOwner";

function StoreOwnerScreen() {
  const dispatch = useDispatch();
  const storeOwnerList = useSelector((state) => state.storeOwnerList);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { storeOwners } = storeOwnerList;

  useEffect(() => {
    console.log(typeof(storeOwners))
    if (userInfo) {
      dispatch(listStoreOwners());
    } else {
      alert("Not Logged In");
    }
  }, [dispatch]);
  console.log(storeOwners);

  return (
    <div className="StoreOwnerScreen">
      <h3>Owner Details</h3>
      <SearchBox />
      {storeOwners && Array.isArray(storeOwners)
        ? storeOwners.map((owner) => (
            <div key={owner._id}>
              <StoreOwner owner={owner} />
            </div>
          ))
        : null}
    </div>
  );
}

export default StoreOwnerScreen;
