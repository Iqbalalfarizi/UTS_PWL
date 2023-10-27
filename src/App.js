import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProduct from "./components/listProduct";
import AddForm from "./components/formAddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/addProduct" element={<AddForm />} />
      </Routes>
    </Router>
  );
}

export default App;
