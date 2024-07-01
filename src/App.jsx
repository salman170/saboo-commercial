import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
// import About from "./screens/other/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import SuperCarry from "./screens/vehicles/supper carry/SuperCarry";
// import EccoCargo from "./screens/vehicles/ecco cargo/EccoCargo";
// import TourM from "./screens/vehicles/tour m/TourM";
// import TourH1 from "./screens/vehicles/tour h1/TourH1";
// import TourH3 from "./screens/vehicles/tour h3/TourH3";
// import TourS from "./screens/vehicles/tour s/TourS";
// import TourV from "./screens/vehicles/tour v/TourV";
import PageNotFound from "./screens/other/PageNotFound";
// import ContactUs from "./screens/other/ContactUs";
// import Finance from "./screens/other/Finance";
// import Insurance from "./screens/other/Insurance";
// import Service from "./screens/other/Service";
// import ThreeJs from "./screens/home/ThreeJs";
// import User from "./screens/Dashboard/User";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/user" element={<User />} /> */}
        {/* <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/services" element={<Service />} />
        <Route path="/super-carry" element={<SuperCarry />} />
        <Route path="/eeco-cargo" element={<EccoCargo />} />
        <Route path="/alto-tour-h1" element={<TourH1 />} />
        <Route path="/wagonr-tour-h3" element={<TourH3 />} />
        <Route path="/dzire-tour-s" element={<TourS />} />
        <Route path="/ertiga-tour-m" element={<TourM />} />
        <Route path="/eeco-tour-v" element={<TourV />} />
        <Route path="/three" element={<ThreeJs />} /> */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
