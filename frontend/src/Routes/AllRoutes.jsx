import { Routes, Route } from "react-router-dom";
import React from "react";
import Details from "../pages/SinglePage/Details";
import ProductsMerge from "../pages/TVPage/ProductsMerge";
import HomePage from "../pages/Homepage/HomePage";
import CartMerge from "../pages/CartPage/CartMerge";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tv" element={<ProductsMerge />} />
      <Route path="/cart" element={<CartMerge />} />
      <Route path="/productpage/:id" element={<Details />} />
    </Routes>
  );
};
