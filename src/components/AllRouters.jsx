import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Letstalk from "../pages/Letstalk";
import Contactus from "../pages/Contactus";
import Invest from "../pages/Invest";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Legal from "../pages/Legal";
import Cookies from "../pages/Cookies";
import Faqs from "../pages/Faqs";
import Different from "../pages/Different";
import Works from "../pages/Works";
import Tokenization from "../pages/Tokenization";
import Ourstory from "../pages/Ourstory";
import PropertiesList from "./PropertiesList";
import ProductDetails from "./ProductDetails";
import DetailsBlogs from "../pages/DetailsBlogs";
import BlogList from "../pages/BlogList";
import DefaultPage from "../pages/DefaultPage";

const AllRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lets-talk" element={<Letstalk />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/invest" element={<Invest />} />

        {/* Legal */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/legal-disclaimer" element={<Legal />} />
        <Route path="/cookies-policy" element={<Cookies />} />

        {/* Learn */}

        <Route path="/faqs" element={<Faqs />} />
        <Route path="/how-we-are-different" element={<Different />} />
        <Route path="/how-it-works" element={<Works />} />
        <Route path="/tokenization-process" element={<Tokenization />} />

        {/* About */}
        <Route path="/our-story" element={<Ourstory />} />

        {/* Properties */}
        <Route path="/properties" element={<PropertiesList />} />
        <Route path="/details-property/:id" element={<ProductDetails />} />

        {/* Blogs */}
        <Route path="/details-blogs/:id" element={<DetailsBlogs />} />
        <Route path="/blog-list" element={<BlogList />} />
      </Routes>
    </div>
  );
};

export default AllRouters;
