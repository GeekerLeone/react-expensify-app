import ReactDOM from "react-dom";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    } from "react-router-dom";
import App from "./App";
import Expenses from "./expenses";
import Invoices from "./invoices";
import Invoice from "./invoice";

const jsx = (
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
    </BrowserRouter>
)


const rootElement = document.getElementById("app");
ReactDOM.render(jsx, rootElement);