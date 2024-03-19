import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-dt";
import axios from "axios";
import { Link } from "react-router-dom";

const Datatable = () => {
  const tableRef = useRef();
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
      console.log(res.data.products);
    } catch (error) {}
  };
  useEffect(() => {
    const initialData = async () => {
      await getData();
      $(tableRef.current).DataTable();
    };
    initialData();
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <button className="btn-column">
        <Link to="/add">Add Column</Link>
      </button>
      {data ? (
        <table ref={tableRef}>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Title</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.slice(1, 10).map((item, index) => (
                <tr key={index}>
                  <td>{item.brand}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                  <td>{item.stock}</td>
                  <td>{item.discountPercentage}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Title</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      )}
    </div>
  );
};

export default Datatable;
