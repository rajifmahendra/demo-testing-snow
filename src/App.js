import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Datatable from "./Component/Datatable";
import AddDataTable from "./Component/AddData";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Datatable />} />
        <Route path="/Add" element={<AddDataTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
