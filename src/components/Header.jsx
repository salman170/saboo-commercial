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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible2, setVisible2] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible2(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   if (visible) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [visible]);

  // const handleMouseLeave = () => {
  //   setTimeout(() => {
  //     setVisible(false);
  //   }, 500);
  // }
  // const handleMouseEnter = () => {
  //   clearTimeout();
  //   setVisible(true);
  // }

  return (
    <div
      className={`sticky top-0 left-0 z-40 w-full bg-white shadow duration-200  ${
        visible2 ? "" : "-translate-y-32"
      } `}
    >
      <div
        className={`fixed duration-200 w-full top-0 bg-white z-10  left-0 ${
          visible2 ? "" : "translate-y-32"
        } `}
      >
        <div className="flex justify-between w-full h-12 border-b">
          <div className="flex items-center justify-between w-full px-2 md:gap-2 md:justify-start">
           
          <p className="text-xs">
              Call Us:
              <a
                href="tel:+919848898488"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                {" "}
                98488-98488
              </a>
            </p>
            <p className="text-xs">
              Email:
              <a
                href="mailto:info@saboomaruti.in"
                className="ml-1 text-primary"
                target="_blank"
                rel="noreferrer"
              >
                info@saboomaruti.in
              </a>
            </p> 
          </div>
          <div className="items-center hidden gap-2 px-2 md:flex">
            <button
              aria-label="enquiry form"
              className="px-4 py-2 text-xs text-center text-white uppercase rounded-full cursor-pointer w-28 bg-primary whitespace-nowrap "
            >
              Enquire Now
            </button>
            <button
              aria-label="offers"
              className="px-4 py-2 text-xs text-center text-white uppercase rounded-full cursor-pointer w-28 bg-primary"
            >
              Offers
            </button>
            {/* <div className="w-32 px-4 py-2 text-xs text-center text-white uppercase rounded-full bg-primary whitespace-nowrap">
              Book a Service
            </div>
            <div className="w-32 px-4 py-2 text-xs text-center text-white uppercase rounded-full bg-primary whitespace-nowrap">
             Showoom Visit
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between w-full h-12 border-b">
        <div className="flex items-center justify-between w-full px-2 md:gap-2 md:justify-start">
          <p className="text-xs">
            Call Us:
            <a href="tel:+919848898488" target="_blank" rel="noreferrer" className="text-primary">
              {" "}
              98488-98488
            </a>
          </p>
          <p className="text-xs ">
            Email:
            <a
              href="mailto:info@saboomaruti.in"
              className="ml-1 text-primary"
              target="_blank"
              rel="noreferrer"
            >
              info@saboomaruti.in
            </a>
          </p>
        </div>
        <div className="items-center hidden gap-2 px-2 md:flex">
          <div className="px-4 py-2 text-xs text-center text-white uppercase rounded-lg w-28 bg-primary">
            Offers
          </div>
          <div className="px-4 py-2 text-xs text-center text-white uppercase rounded-lg w-28 bg-primary whitespace-nowrap">
            Enquire Now
          </div>
         
        </div>
      </div> */}
      <div className={`relative pt-12 `}>
        <div
          className={`flex items-center justify-between h-20 px-2 lg:px-4 border-b`}
        >
          <div onMouseEnter={() => setVisible(false)} className="">
            <Link to="/" className="w-min">
              <img
                src={require("../assets/home/RKS Commercial Logo.png")}
                alt=""
                className="object-contain w-28 lg:w-36 "
              />
            </Link>
          </div>
          <div className="hidden text-sm font-medium gap-x-4 lg:gap-x-6 md:flex">
            <div
              className={`flex flex-col justify-between cursor-pointer hover:text-primary group ${
                visible && "text-primary"
              } `}
              onMouseEnter={() => setVisible(true)}
              // onMouseLeave={() => handleMouseLeave()}
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
        {visible && visible2 && (
          <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className={`absolute top-32 left-0 w-full bg-zinc-50  hidden md:flex border-b  items-center  flex-col z-20 py-4 select-none lg:py-10`}
          >
            <div className="z-10 flex justify-between w-full max-w-md text-sm">
              <div
                onClick={() => setSelected("Goods Carrier")}
                // onMouseEnter={() => setSelected("Goods Carrier")}
                className={`pb-4 cursor-pointer  ${
                  selected === "Goods Carrier" &&
                  "border-b-2 border-primary text-primary"
                }`}
              >
                Goods Carrier
              </div>
              <div
                onClick={() => setSelected("Passenger Carrier")}
                // onMouseEnter={() => setSelected("Passenger Carrier")}
                className={`pb-4 cursor-pointer  ${
                  selected === "Passenger Carrier" &&
                  "border-b-2 border-primary text-primary"
                }`}
              >
                Passenger Carrier
              </div>
            </div>
            <div className="w-full h-0.5 bg-primary/5 max-w-md mb-2 -mt-0.5 z-0"></div>

            {selected === "Goods Carrier" ? (
              <div className="flex gap-4 mt-4 mb-2 lg:gap-10">
                <Link to="/super-carry" onClick={() => setVisible(false)}>
                  <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-blue-50">
                    <img
                      src={require("../assets/vehicles/super_carry/others/Super Carry.webp")}
                      alt=""
                      className="h-40"
                    />
                    <img
                      src={require("../assets/vehicles/super_carry/others/new super carry logo.webp")}
                      alt=""
                      className="h-3 mt-2 "
                    />
                    <p className="mt-1 text-xs">
                      Starting at{" "}
                      <span className="font-bold"> ₹ 5,40,501 *</span>
                    </p>
                    <p className="mb-3 text-xs">
                      Engine <span className="font-bold"> 1197 cc</span>
                    </p>
                    {/* <button
                      aria-label="super-carry"
                      className="px-4 py-1.5 text-sm hover:text-white border rounded-full hover:bg-primary text-primary bg-transparent border-primary  group-hover:opacity-100 opacity-0 duration-500"
                    >
                      Explore
                    </button> */}
                  </div>
                </Link>
                <Link to="/eeco-cargo" onClick={() => setVisible(false)}>
                  <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-blue-50 ">
                    <img
                      src={require("../assets/vehicles/ecco_cargo/Eeco Cargo.webp")}
                      alt=""
                      className="mb-4 h-36"
                    />
                    <img
                      src={require("../assets/vehicles/ecco_cargo/eecoCargoBrandName.png")}
                      alt=""
                      className="h-3 mt-2 "
                    />
                    <p className="mt-1 text-xs">
                      Starting at{" "}
                      <span className="font-bold"> ₹ 5,47,000 *</span>
                    </p>
                    <p className="mb-3 text-xs">
                      Engine <span className="font-bold"> 1197 cc</span>
                    </p>
                    {/* <button
                      aria-label="eeco-cargo"
                      className="px-4 py-1.5 text-sm hover:text-white border rounded-full hover:bg-primary text-primary bg-transparent border-primary  group-hover:opacity-100 opacity-0 duration-500"
                    >
                      Explore
                    </button> */}
                  </div>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-3 mt-4 mb-2 overflow-scroll grico lg:gap-x-10 max-h-[70vh]">
                <Link to="/alto-tour-h1" onClick={() => setVisible(false)}>
                  <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-blue-50">
                    <img
                      src={require("../assets/vehicles/Tour_H1/TourH1-NewImg.webp")}
                      alt=""
                      className="h-32"
                    />
                    <img
                      src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour_h1-logo-2-new.png"
                      alt=""
                      className="h-5 mt-2"
                    />
                    <p className="mt-1 text-xs">
                      Starting at{" "}
                      <span className="font-bold"> ₹ 5,40,501 *</span>
                    </p>
                    <p className="mb-3 text-xs">
                      Engine <span className="font-bold"> 1197 cc</span>
                    </p>
                    {/* <button
                      aria-label="super-carry"
                      className="px-4 py-1.5 text-sm text-white border rounded-full bg-primary   border-primary  group-hover:opacity-100 opacity-0 duration-100"
                    >
                      Explore
                    </button> */}
                  </div>
                </Link>
                <Link to="/wagonr-tour-h3" onClick={() => setVisible(false)}>
                  <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-blue-50 ">
                    <img
                      src={require("../assets/vehicles/Tour_H3/Tour H3.webp")}
                      alt=""
                      className="h-32"
                    />
                    <img
                      src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour_h3-logo-2-new.png"
                      alt=""
                      className="h-5 mt-2"
                    />
                    <p className="mt-1 text-xs">
                      Starting at{" "}
                      <span className="font-bold"> ₹ 5,47,000 *</span>
                    </p>
                    <p className="mb-3 text-xs">
                      Engine <span className="font-bold"> 1197 cc</span>
                    </p>
                    {/* <button
                      aria-label="eeco-cargo"
                      className="px-4 py-1.5 text-sm text-white border rounded-full bg-primary   border-primary  group-hover:opacity-100 opacity-0 duration-100"
                    >
                      Explore
                    </button> */}
                  </div>
                </Link>
                <Link to="/dzire-tour-s" onClick={() => setVisible(false)}>
                  <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-blue-50 ">
                    <img
                      src={require("../assets/vehicles/Tour_S/Tour S.webp")}
                      alt=""
                      className="h-32"
                    />
                    <img
                      src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour-s-logo-new.png"
                      alt=""
                      className="h-5 mt-2"
                    />
                    <p className="mt-1 text-xs">
                      Starting at{" "}
                      <span className="font-bold"> ₹ 5,47,000 *</span>
                    </p>
                    <p className="mb-3 text-xs">
                      Engine <span className="font-bold"> 1197 cc</span>
                    </p>
                    {/* <button
                      aria-label="eeco-cargo"
                      className="px-4 py-1.5 text-sm text-white border rounded-full bg-primary   border-primary  group-hover:opacity-100 opacity-0 duration-100"
                    >
                      Explore
                    </button> */}
                  </div>
                </Link>
                <Link to="/ertiga-tour-m" onClick={() => setVisible(false)}>
                  <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-blue-50 ">
                    <img
                      src={require("../assets/vehicles/Tour_M/Tour M.webp")}
                      alt=""
                      className="h-32"
                    />
                    <img
                      src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour-m-logo-new.png"
                      alt=""
                      className="h-5 mt-2"
                    />
                    <p className="mt-1 text-xs">
                      Starting at{" "}
                      <span className="font-bold"> ₹ 5,47,000 *</span>
                    </p>
                    <p className="mb-3 text-xs">
                      Engine <span className="font-bold"> 1197 cc</span>
                    </p>
                    {/* <button
                      aria-label="eeco-cargo"
                      className="px-4 py-1.5 text-sm text-white border rounded-full bg-primary   border-primary  group-hover:opacity-100 opacity-0 duration-100"
                    >
                      Explore
                    </button> */}
                  </div>
                </Link>
                <Link to="/eeco-tour-v" onClick={() => setVisible(false)}>
                  <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl group hover:bg-blue-50 ">
                    <img
                      src={require("../assets/vehicles/Tour_V/Tour V.webp")}
                      alt=""
                      className="h-32"
                    />
                    <img
                      src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour_v-logo-2-new.png"
                      alt=""
                      className="h-5 mt-2"
                    />
                    <p className="mt-1 text-xs">
                      Starting at{" "}
                      <span className="font-bold"> ₹ 5,47,000 *</span>
                    </p>
                    <p className="mb-3 text-xs">
                      Engine <span className="font-bold"> 1197 cc</span>
                    </p>
                    {/* <button
                      aria-label="eeco-cargo"
                      className="px-4 py-1.5 text-sm text-white border rounded-full bg-primary   border-primary  group-hover:opacity-100 opacity-0 duration-100"
                    >
                      Explore
                    </button> */}
                  </div>
                </Link>
              </div>
            )}
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
