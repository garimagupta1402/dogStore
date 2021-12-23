import React from "react";
import Home from "./Home";
import Nav from "../components/Nav/nav";
import Contact from "./Contact/index";
import Login from "./Login/index"
import SignUp from "./SignUp/index";
import About from "./About";
import FAQ from "./FAQ";
import Breeds from './Breeds/index'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import FavBreed from "./favBreed";

function Main() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="breeds" element={<Breeds/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favbreed" element={<FavBreed/>}/>
      </Routes>
    </Router>
  );
}
export default Main;
