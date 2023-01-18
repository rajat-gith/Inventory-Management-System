import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SalesScreen from "./screens/SalesScreen";
import StoreOwnerScreen from "./screens/StoreOwnerScreen";
import StoreScreen from "./screens/StoreScreen";
import DeveloperProfileScreen from "./screens/DeveloperProfileScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import Nav from "./components/Nav";
import OwnerStoreScreen from "./screens/OwnerStoreScreen";
import StoreBrandsScreen from "./screens/StoreBrandsScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />

        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<RegisterScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/home/products/" element={<ProductScreen />} />
          <Route path="/home/sales" element={<SalesScreen />} />
          <Route path="/home/storeOwner" element={<StoreOwnerScreen />} />
          <Route path="/home/storeOwner/:id" element={<OwnerStoreScreen />} />
          <Route path="/home/store" element={<StoreScreen />} />
          <Route path="/home/contactus" element={<ContactUsScreen />} />
          <Route path="/home/store/:id" element={<StoreBrandsScreen />} />
          <Route
            path="/home/developerprofile"
            element={<DeveloperProfileScreen />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
