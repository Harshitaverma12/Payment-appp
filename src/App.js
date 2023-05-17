import React from "react";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";

function App() {
  return (
    <>
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/signUp" ? (
        <Header />
      ) : null}{" "}
      <Router>
        <Routes>
          <Route exact path="/home" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
