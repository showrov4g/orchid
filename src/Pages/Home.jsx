import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Slider from "../Components/Slider";
import Featured from "../Components/Featured";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
