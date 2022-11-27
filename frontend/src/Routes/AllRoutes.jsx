import { Routes, Route } from "react-router-dom";
import React from "react";
import Details from "../pages/SinglePage/Details";
import ProductsMerge from "../pages/TVPage/ProductsMerge";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Homepage</h1>} />
      <Route path="/productpage" element={<ProductsMerge />} />
      <Route path="/productpage/:id" element={<Details/>} />
    </Routes>
  );
};
