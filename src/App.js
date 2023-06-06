import React from "react";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Cat from "./components/category/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import Details2 from "./components/details/Details2";
import Details3 from "./components/details/Details3";
import Details4 from "./components/details/Details4";
import Details5 from "./components/details/Details5";




function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details2" element={<Details2 />} />
          <Route path="/details3" element={<Details3 />} />
          <Route path="/details4" element={<Details4 />} />
          <Route path="/details5" element={<Details5 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
