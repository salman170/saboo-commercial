import React, { useEffect } from "react";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiShare2 } from "react-icons/fi";

const SocialMedia = () => {
  useEffect(() => {
    AOS.init();
    //    AOS.init({ once: true });
  }, []);

  return (
    <div className="px-1 pb-10 overflow-hidden md:pb-12 lg:pb-16">
      <div className="container mx-auto mb-10 lg:max-w-4xl ">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="pb-4 text-xl font-medium text-center uppercase lg:pb-5 md:text-xl lg:text-2xl lg:font-semibold "
        >
          FUELING ONLINE CONVERSATIONS
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="text-sm text-center lg:px-10 "
        >
          Maruti Suzuki Commercial Captivates Audiences with its Heartfelt
          Regional Content and Innovative Initiatives.
        </div>
      </div>
      <div className="hidden gap-2 md:grid md:grid-cols-12">
        <div className="col-span-4">
          <div className="w-full group hover:bg-primary h-[30vh] rounded-xl bg-[url(https://static.marutisuzukicommercial.com/-/media/msilcommercial/knowmore/youtubenew1.png)] bg-cover bg-center">
            <div className="relative w-full h-full rounded-xl group-hover:bg-primary/80 ">
              <div className="absolute flex items-center justify-center w-8 h-8 mt-2 bg-[#FF0000] rounded-full top-2 left-2 ">
                <FaYoutube className="text-xl text-white" />
              </div>
              <div className="absolute grid w-full grid-cols-12 mt-2 text-sm text-white rounded-full bottom-2 left-2 ">
                <div className="col-span-10">
                  <p>
                    {" "}
                    New Super Carry with Superpower: India's Most Powerful
                    Mini-Truck*​
                  </p>
                  <button className="hidden w-20 py-2 mt-3 text-xs bg-white rounded-lg hover:shadow-xl shadow-black text-primary group-hover:block">
                    Explore
                  </button>
                </div>
                <div className="flex items-end justify-end ">
                  <FiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full group hover:bg-primary h-[30vh] rounded-xl bg-[url(https://static.marutisuzukicommercial.com/-/media/msilcommercial/knowmore/youtubenew2.png)] mt-2 bg-cover bg-center">
            <div className="relative w-full h-full rounded-xl group-hover:bg-primary/80 ">
              <div className="absolute flex items-center justify-center w-8 h-8 mt-2 bg-[#FF0000] rounded-full top-2 left-2 ">
                <FaYoutube className="text-xl text-white" />
              </div>
              <div className="absolute grid w-full grid-cols-12 mt-2 text-sm text-white rounded-full bottom-2 left-2 ">
                <div className="col-span-10">
                  <p>
                    {" "}
                    New Super Carry with Superpower: India's Most Powerful
                    Mini-Truck*​
                  </p>
                  <button className="hidden w-20 py-2 mt-3 text-xs bg-white rounded-lg hover:shadow-xl shadow-black text-primary group-hover:block">
                    Explore
                  </button>
                </div>
                <div className="flex items-end justify-end ">
                  <FiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  hover:bg-primary h-[60vh] rounded-xl col-span-4">
          <div className="w-full group hover:bg-primary h-full rounded-xl bg-[url(https://static.marutisuzukicommercial.com/-/media/msilcommercial/knowmore/twitternew.png)] bg-cover bg-center">
            <div className="relative w-full h-full rounded-xl group-hover:bg-primary/80 ">
              <div className="absolute flex items-center justify-center w-8 h-8 mt-2 bg-black rounded-full top-2 left-2 ">
                <FaXTwitter className="text-xl text-white" />
              </div>
              <div className="absolute grid w-full grid-cols-12 p-3 mt-2 text-sm text-white rounded-full bottom-2 left-2">
                <div className="col-span-10 font-medium">
                  <p>
                    Celebrate India’s festivals with Maruti Suzuki Super Carry​
                  </p>
                  <button className="hidden w-20 py-2 mt-3 text-xs bg-white rounded-lg hover:shadow-xl shadow-black text-primary group-hover:block">
                    Explore
                  </button>
                </div>
                <div className="flex items-end justify-end ">
                  <FiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-full group hover:bg-primary h-[30vh] rounded-xl bg-[url(https://static.marutisuzukicommercial.com/-/media/msilcommercial/knowmore/facebookupdated.png)] bg-cover bg-center">
            <div className="relative w-full h-full rounded-xl group-hover:bg-primary/80 ">
              <div className="absolute flex items-center justify-center w-8 h-8 mt-2 bg-[#3B5998] rounded-full top-2 left-2 ">
                <FaFacebookF className="text-xl text-white" />
              </div>
              <div className="absolute grid w-full grid-cols-12 mt-2 text-sm text-white rounded-full bottom-2 left-2 ">
                <div className="col-span-10">
                  <p>
                    {" "}
                    New Super Carry with Superpower: India's Most Powerful
                    Mini-Truck*​
                  </p>
                  <button className="hidden w-20 py-2 mt-3 text-xs bg-white rounded-lg hover:shadow-xl shadow-black text-primary group-hover:block">
                    Explore
                  </button>
                </div>
                <div className="flex items-end justify-end ">
                  <FiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full group hover:bg-primary h-[30vh] rounded-xl bg-[url(https://static.marutisuzukicommercial.com/-/media/msilcommercial/knowmore/facebooknew.png)] mt-2 bg-cover bg-center">
            <div className="relative w-full h-full rounded-xl group-hover:bg-primary/80 ">
              <div className="absolute flex items-center justify-center w-8 h-8 mt-2 bg-[#3b5998] rounded-full top-2 left-2 ">
                <FaFacebookF className="text-xl text-white" />
              </div>
              <div className="absolute grid w-full grid-cols-12 mt-2 text-sm text-white rounded-full bottom-2 left-2 ">
                <div className="col-span-10">
                  <p>
                    {" "}
                    New Super Carry with Superpower: India's Most Powerful
                    Mini-Truck*​
                  </p>
                  <button className="hidden w-20 py-2 mt-3 text-xs bg-white rounded-lg hover:shadow-xl shadow-black text-primary group-hover:block">
                    Explore
                  </button>
                </div>
                <div className="flex items-end justify-end ">
                  <FiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-full group hover:bg-primary h-[30vh] rounded-xl bg-[url(https://static.marutisuzukicommercial.com/-/media/msilcommercial/knowmore/insta1.png)] bg-cover bg-center">
            <div className="relative w-full h-full rounded-xl group-hover:bg-primary/80 ">
              <div className="absolute flex items-center justify-center w-8 h-8 mt-2 rounded-full bg-gradient-to-tr top-2 left-2 from-[#feda75] via-[#d62976] to-[#962fbf] ">
                <FaInstagram className="text-xl text-white" />
              </div>
              <div className="absolute grid w-full grid-cols-12 mt-2 text-sm text-white rounded-full bottom-2 left-2 ">
                <div className="col-span-10">
                  <p>
                    {" "}
                    New Super Carry with Superpower: India's Most Powerful
                    Mini-Truck*​
                  </p>
                  <button className="hidden w-20 py-2 mt-3 text-xs bg-white rounded-lg hover:shadow-xl shadow-black text-primary group-hover:block">
                    Explore
                  </button>
                </div>
                <div className="flex items-end justify-end ">
                  <FiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full group hover:bg-primary h-[30vh] rounded-xl bg-[url(https://static.marutisuzukicommercial.com/-/media/msilcommercial/knowmore/instanew2.png)] mt-2 bg-cover bg-center">
            <div className="relative w-full h-full rounded-xl group-hover:bg-primary/80 ">
              <div className="absolute flex items-center justify-center w-8 h-8 mt-2 rounded-full bg-gradient-to-tr top-2 left-2 from-[#feda75] via-[#d62976] to-[#962fbf] ">
                <FaInstagram className="text-xl text-white" />
              </div>
              <div className="absolute grid w-full grid-cols-12 mt-2 text-sm text-white rounded-full bottom-2 left-2 ">
                <div className="col-span-10">
                  <p>
                  
                    Maruti Suzuki Commercial's Tour S lets you make more trips
                    without worrying about the mileage​
                  </p>
                  <button className="hidden w-20 py-2 mt-3 text-xs bg-white rounded-lg hover:shadow-xl shadow-black text-primary group-hover:block">
                    Explore
                  </button>
                </div>
                <div className="flex items-end justify-end ">
                  <FiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
