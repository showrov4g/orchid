import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Slider from "../Components/Slider";
import Featured from "../Components/Featured";
import Gallary from "../Components/Gallary";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div>
        <Featured></Featured>
        <Gallary></Gallary>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default Home;
