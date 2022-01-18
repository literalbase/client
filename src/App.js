import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Sign from "./Pages/SIngnIn/Sign"


function App() {


  return (
    <BrowserRouter>
  
    <div className="App">
      <Navbar />
    </div> 
     <Routes>
     <Route exact path = "/signup" element = {<SignUp/>}/>
     <Route exact path = "/signin" element = {<Sign/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
