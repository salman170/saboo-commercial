import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  //  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  //  const [visible, setVisible] = useState(true);

  //  useEffect(() => {
  //    const handleScroll = () => {
  //      const currentScrollPos = window.pageYOffset;
  //      const isVisible =
  //        prevScrollPos > currentScrollPos || currentScrollPos < 10;
  //      setPrevScrollPos(currentScrollPos);
  //      setVisible(isVisible);
  //    };

  //    window.addEventListener("scroll", handleScroll);

  //    return () => {
  //      window.removeEventListener("scroll", handleScroll);
  //    };
  //  }, [prevScrollPos]);

  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Goods Carrier");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <div className="sticky top-0 left-0 z-40 w-full bg-white shadow ">
      <div className="relative">
        <div
          className={`flex items-center justify-between h-20 px-2 lg:px-4 border-b`}
        >
          <div onMouseEnter={() => setVisible(false)} className="">
            <Link to="/" className="w-min">
              <img
                src={require("../assets/home/RKS Commercial Logo.png")}
                alt=""
                className="object-contain w-28 lg:w-32 "
              />
            </Link>
          </div>
          <div className="hidden text-sm font-medium gap-x-4 lg:gap-x-6 md:flex">
            <div
              className={`flex flex-col justify-between cursor-pointer hover:text-primary group ${
                visible && "text-primary"
              } `}
              onMouseEnter={() => setVisible(true)}
            >
              <p className="flex items-center gap-1 py-6 lg:py-7 group">
                Vehicle Range
                <IoMdArrowDropdown
                  className={`text-lg duration-500 group-hover:-rotate-180 ${
                    visible && "-rotate-180"
                  }`}
                />
              </p>
              <div
                className={`h-[3px] bg-primary group-hover:w-full w-0 duration-500 ${
                  visible && "w-full"
                } `}
              />
            </div>
            <Link
              to="/services"
              onMouseEnter={() => setVisible(false)}
              className="flex flex-col justify-between hover:text-primary group"
            >
              <p className="py-6 lg:py-7">Book a Service</p>
              <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500" />
            </Link>
            <Link
              to="/about-us"
              onMouseEnter={() => setVisible(false)}
              className="flex flex-col justify-between hover:text-primary group"
            >
              <p className="py-6 lg:py-7"> About us</p>
              <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500" />
            </Link>

            <Link
              to="/finance"
              onMouseEnter={() => setVisible(false)}
              className="flex flex-col justify-between hover:text-primary group"
            >
              <p className="py-6 lg:py-7">Finance</p>
              <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500" />
            </Link>
            <Link
              to="/insurance"
              onMouseEnter={() => setVisible(false)}
              className="flex flex-col justify-between hover:text-primary group"
            >
              <p className="py-6 lg:py-7">Insurance</p>
              <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500" />
            </Link>
            <Link
              to="/contact-us"
              onMouseEnter={() => setVisible(false)}
              className="flex flex-col justify-between hover:text-primary group"
            >
              <p className="py-6 lg:py-7"> Contact us</p>
              <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500" />
            </Link>
          </div>
          <div className="py-4 md:hidden">
            <button className="text-3xl">
              <IoMenu />
            </button>
          </div>
        </div>
        {visible && (
          <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className={`absolute top-20 left-0 w-full bg-white  hidden md:flex border-b  items-center  flex-col z-20 py-4 select-none lg:py-10`}
          >
            <div className="z-10 flex justify-between w-full max-w-md text-sm">
              <div
                onClick={() => setSelected("Goods Carrier")}
                className={`pb-4 cursor-pointer  ${
                  selected === "Goods Carrier" &&
                  "border-b-2 border-primary text-primary"
                }`}
              >
                Goods Carrier
              </div>
              <div
                onClick={() => setSelected("Passenger Carrier")}
                className={`pb-4 cursor-pointer  ${
                  selected === "Passenger Carrier" &&
                  "border-b-2 border-primary text-primary"
                }`}
              >
                Passenger Carrier
              </div>
            </div>
            <div className="w-full h-0.5 bg-gray-200 max-w-md mb-2 -mt-0.5 z-0"></div>

            <div className="flex gap-4 mt-4 mb-2 lg:gap-10">
              <Link to="/super-carry" onClick={() => setVisible(false)}>
                <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-primary/5">
                  <img
                    src={require("../assets/vehicles/super_carry/others/Super Carry.webp")}
                    alt=""
                    className="h-40"
                  />
                  <img
                    src={require("../assets/vehicles/super_carry/others/new super carry logo.webp")}
                    alt=""
                    className="mt-2 "
                  />
                  <p className="mt-1 text-xs">
                    Starting at <span className="font-bold"> ₹ 5,40,501 *</span>
                  </p>
                  <p className="text-xs">
                    Engine <span className="font-bold"> 1197 cc</span>
                  </p>
                  <button
                    aria-label="super-carry"
                    className="px-4 py-1.5 text-sm hover:text-white border rounded-full hover:bg-primary text-primary bg-transparent border-primary mt-3 group-hover:opacity-100 opacity-0 duration-500"
                  >
                    Explore
                  </button>
                </div>
              </Link>
              <Link to="/eeco-cargo" onClick={() => setVisible(false)}>
                <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-primary/5 ">
                  <img
                    src={require("../assets/vehicles/ecco_cargo/Eeco Cargo.webp")}
                    alt=""
                    className="h-40"
                  />
                  <img
                    src={require("../assets/vehicles/ecco_cargo/eecoCargoBrandName.png")}
                    alt=""
                    className="mt-2 "
                  />
                  <p className="mt-1 text-xs">
                    Starting at <span className="font-bold"> ₹ 5,47,000 *</span>
                  </p>
                  <p className="text-xs">
                    Engine <span className="font-bold"> 1197 cc</span>
                  </p>
                  <button
                    aria-label="eeco-cargo"
                    className="px-4 py-1.5 text-sm hover:text-white border rounded-full hover:bg-primary text-primary bg-transparent border-primary mt-3 group-hover:opacity-100 opacity-0 duration-500"
                  >
                    Explore
                  </button>
                </div>
              </Link>
            </div>
            {/* <div
              style={{
                background: `linear-gradient(rgba(208, 226, 252, 0) 0%, rgb(208, 226, 252) 49.66%, rgb(208, 226, 252) 100%)`,
              }}
              className="absolute top-0 left-0 w-full h-1/2 -z-10"
            ></div>
            <div
              style={{
                background: `linear-gradient(rgba(208, 226, 252, 0) 0%, rgb(208, 226, 252) 49.66%, rgb(208, 226, 252) 100%)`,
              }}
              className="absolute bottom-0 left-0 w-full rotate-180 h-1/2 -z-10"
            ></div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
