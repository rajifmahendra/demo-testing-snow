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
    <div
      style={{
        marginTop: "40px",
        marginLeft: "170px",
        display: "flex",
        padding: "5px 20px 20px 20px",
        justifyContent: "center",
      }}
    >
      <div>
        <div>
          <h3>Table user_data Records</h3>
        </div>
        {data ? (
          <table ref={tableRef}>
            <thead>
              <tr>
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
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                {column?.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Datatable;
