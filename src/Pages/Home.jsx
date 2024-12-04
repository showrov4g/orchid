import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
    </div>
  );
};

export default Home;
