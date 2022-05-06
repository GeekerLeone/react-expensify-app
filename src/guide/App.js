import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../styles/styles.scss";


export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink className={({ isActive }) => isActive ? "is-active" : ''} to="/invoices">Invoices</NavLink> |{" "}
        <NavLink className={({ isActive }) => isActive ? "is-active" : ''} to="/expenses">Expenses</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}