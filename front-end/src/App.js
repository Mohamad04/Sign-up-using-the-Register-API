import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CustomerSignUp from "./pages/cutomerSignUp";
import AdminLogIn from "./pages/adminLogIn";
import Customers from "./pages/cutstomersList";
import ProtectedRoute from "./protected.route";

 


function App() {

  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route exact path="/" element={<CustomerSignUp />}></Route>
        <Route exact path="/design" element={<Home />}></Route>
        <Route exact path="/admin/login" element={<AdminLogIn />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route exact path="/customers/:token" element={<Customers />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
