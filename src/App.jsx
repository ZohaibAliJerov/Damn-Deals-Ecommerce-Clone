import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./Components/layout";
import SignUp from "./pages/signUp/SignUp";
import "./App.css";
import SignIn from "./pages/signIn/SignIn";
import LaptopAccessories from "./pages/laptopAccessories/LaptopAccessories";
import ShopPageWithSideFilter from "./pages/shopPageWithSideFilter/ShopPageWithSideFilter";
import ShopProductDetails from "./pages/shopProductDetails/ShopProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/categorized-products/:id"
          element={
            <Layout>
              <LaptopAccessories />
            </Layout>
          }
        />
        <Route
          path="/shoppagewithsidefilter/:id"
          element={
            <Layout>
              <ShopPageWithSideFilter />
            </Layout>
          }
        />
        <Route
          path="/shopproductdetails/:id"
          element={
            <Layout>
              <ShopProductDetails />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
