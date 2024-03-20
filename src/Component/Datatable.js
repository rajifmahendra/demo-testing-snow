import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-dt";
import axios from "axios";

const Datatable = () => {
  const tableRef = useRef();
  const [data, setData] = useState();
  const [column, setColumn] = useState();

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
      const key = Object.keys(res.data.products[0]);
      setColumn([key[7], key[8], key[1], key[3], key[5], key[6]]);
    } catch (error) {}
  };
  useEffect(() => {
    const initialData = async () => {
      await getData();
      $(tableRef.current).DataTable();
    };
    initialData();
  }, []);
  // 7, 8, 1, 3, 5, 6,
  return (
    <div style={{ marginLeft: "100px", marginTop: "80px" }}>
      <div>
        <h3>Table user_data Records</h3>
      </div>
      {data ? (
        <table ref={tableRef}>
          <thead>
            <tr>
              {/* <th>Brand</th>
                <th>Title</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Discount</th> */}
              {column?.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                  <td>{item.stock}</td>
                  {/* <td>{item.discountPercentage}</td> */}
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
