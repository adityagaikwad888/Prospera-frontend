import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import AboutPage from "./about/AboutPage";
import ProductPage from "./products/ProductPage";
import PricingPage from "./pricing/PricingPage";
import SupportPage from "./support/SupportPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./SrollToTop";
import "../index.css"

const Info = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Info;
