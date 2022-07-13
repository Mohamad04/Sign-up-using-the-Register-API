import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";


 


function App() {

  return (

    <Router>
	    <div className="App"></div>
      <Routes>
        <Route exact path="/customers" element={<SignUp/>} ></Route>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
