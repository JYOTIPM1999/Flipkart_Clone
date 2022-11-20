import { Routes, Route } from "react-router-dom";
import React from "react";
import ProductPage from "../Jyoti/ProductPage/ProductPage";
import Details from "../../components/Utkarsh/Details";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Homepage</h1>} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/productpage/:id" element={<Details />} />
      {/* <Route path="" element={}/>
      <Route path="" element={}/>
      <Route path="" element={}/> */}
    </Routes>
  );
};
