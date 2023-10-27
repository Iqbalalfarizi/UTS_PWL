import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProduct from "./components/listProduct";
import AddForm from "./components/formAddProduct";
import Cart from "./components/cart";
import ListCart from "./components/listCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/addProduct" element={<AddForm />} />
        <Route path="/listcart" element={<ListCart />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
