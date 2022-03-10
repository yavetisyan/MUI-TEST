import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentification from "./pages/Authentification/Authentification";
import Database from "./pages/Database/Database";
import MachineLearning from "./pages/MachineLearning/MachineLearning";
import Storage from "./pages/Storage/Storage";
import Function from "./pages/Function/Function";
import Hosting from "./pages/Hosting/Hosting";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentification" element={<Authentification />} />
        <Route path="database" element={<Database />} />
        <Route path="function" element={<Function />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
