import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Datatable from "./Component/Datatable";
import AddDataTable from "./Component/AddData";
import Sidebar from './Component/Sidebar';
import HomePage from './Component/Homepage';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      {/* route */}
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Preview" element={<Datatable />} />
        <Route path="/Add" element={<AddDataTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
