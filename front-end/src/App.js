import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CustomerSignUp from "./pages/cutomerSignUp";
import AdminLogIn from "./pages/adminLogIn";
import Customers from "./pages/cutstomers";

 


function App() {

  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route exact path="/customers" element={<Customers />}></Route>
        <Route
          exact
          path="/customers/signup"
          element={<CustomerSignUp />}
        ></Route>
        <Route exact path="/admin/login" element={<AdminLogIn />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
