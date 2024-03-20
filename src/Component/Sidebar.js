import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>
        <h2 style={styles.logoText}>Sapura</h2>
      </div>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <Link to="/Home" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/Preview" style={styles.link}>
            Preview Data
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/Add" style={styles.link}>
            Add Column
          </Link>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    height: "100%",
    backgroundColor: "#252525",
    position: "fixed",
    top: 0,
    left: 0,
    paddingTop: "20px",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logoText: {
    color: "#fff",
    fontSize: "24px",
    margin: 0,
  },
  menu: {
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
    marginBottom: "10px",
  },
  link: {
    display: "block",
    padding: "10px 20px",
    color: "#fff",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
};

export default Sidebar;
