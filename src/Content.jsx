import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import Projects from "./pages/Projects";

const Content = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Content;
