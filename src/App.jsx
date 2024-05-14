import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SuperCarry from "./screens/vehicles/supper carry/SuperCarry";
import EccoCargo from "./screens/vehicles/ecco cargo/EccoCargo";
import TourM from "./screens/vehicles/tour m/TourM";
import TourH1 from "./screens/vehicles/tour h1/TourH1";
import TourH3 from "./screens/vehicles/tour h3/TourH3";
import TourS from "./screens/vehicles/tour s/TourS";
import TourV from "./screens/vehicles/tour v/TourV";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/super-carry" element={<SuperCarry />} />
        <Route path="/eeco-cargo" element={<EccoCargo />} />
        <Route path="/alto-tour-h1" element={<TourH1 />} />
        <Route path="/wagonr-tour-h3" element={<TourH3 />} />
        <Route path="/dzire-tour-s" element={<TourS />} />
        <Route path="/ertiga-tour-m" element={<TourM />} />
        <Route path="/eeco-tour-v" element={<TourV />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
