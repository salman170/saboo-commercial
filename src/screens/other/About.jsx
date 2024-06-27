import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/grid";
import "swiper/css/pagination";
import RangeSlider from "../../components/RangeSlider";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const swiperRef = useRef(null);

  const slidesData = [
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/channel-journey/2023.png",
      name: "380+ Outlets and Launch of the New Super Carry",
      date: "2023",
      description: `Continued growth with an expanded network of 380+ outlets.The new Super Carry, showcasing innovation and commitment to excellence.`,
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/channel-journey/2020new.png",
      name: "Expansion to 320+ Outlets and Introduction of Tour Range ",
      date: "2020",
      description: `Expanded the network to 320+ outlets, reaching more customers nationwide. Introduced the Tour Range, catering to the taxi segment with a diverse car lineup. `,
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/channel-journey/2019.png",
      name: "Growth to 300+ Outlets and Introduction of EECO Cargo ",
      date: "2019",
      description: `Continued expansion with a network of 300+ outlets. Introduced EECO Cargo, broadening the cargo vehicle range.`,
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/channel-journey/2018new.png",
      name: "Expansion to 250+ Outlets and 20,000 Sales ",
      date: "2018",
      description: `Expanded the outreach to over 250+ outlets across the country. Surpassed the 20,000-vehicle sales mark, reflecting the brand's growing popularity.`,
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/channel-journey/2017new.png",
      name: "Crossing the 10,000 Sales Milestone",
      date: "2017",
      description: `Achieved a significant milestone by selling over 10,000 vehicles.  Expanded the business to a network of 100+ outlets, marking the initial growth.`,
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/channel-journey/2016.png",
      name: "Introduction of Super Carry ",
      date: "2016",
      description: `Inception of Maruti Suzuki Commercial Channel with the launch of powerful mini-truck, Super Carry`,
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/bnnr-1.png?h=677&iar=0&w=1512&hash=EDB1C4D946A4C39D22622ED76C0A8A12&mw=2048")`,
          height: "60vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // Optionally, you can add other styles as needed
        }}
        className="bg-bottom bg-no-repeat bg-cover"
      ></div>
      <div className="container px-1 py-10 mx-auto select-none lg:max-w-6xl ">
        {/* <p className="text-3xl font-semibold text-center">
          Your optional content here
        </p> */}
        <p
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="pt-6 pb-2 text-xl font-semibold text-center uppercase lg:pt-10 md:text-2xl lg:text-3xl"
        >
          WELCOME TO <span className="text-primary">SABOO COMMERCIAL</span>
        </p>
        <p
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="500"
          className="py-4 text-center "
        >
          In the dynamic realm of mobility, Saboo Commercial stands as an
          industry pioneer with a robust presence across diverse segments. A
          significant 40% of our clientele comprises various business profiles,
          reflecting our prowess in the 'Commercial' domain. Leveraging our
          proven leadership in both the taxi and cargo segments, we are poised
          to cater to your business needs with efficiency and reliability. Trust
          Saboo Commercial for swift passenger transportation and seamless cargo
          handling, where innovation meets reliability to elevate your business
          capabilities.
        </p>
        <p
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="pt-10 pb-2 text-xl font-semibold text-center uppercase lg:pt-16 md:text-2xl lg:text-3xl"
        >
          OUR <span className="text-primary">VALUES</span>
        </p>
        <div className="grid gap-2 pb-10 mt-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
          <div className="flex justify-center ">
            <div className="relative">
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/corevalues/partnershipnew.png"
                alt=""
                className="rounded-lg "
              />
              <div className="absolute bottom-0 left-0 p-1 text-white md:p-2">
                <p className="text-sm font-semibold ">Trusted Agents</p>
                <p className="pb-1 text-xs lg:pb-2">
                  you need commercial vehicle insurance, one of the most
                  important parts of business insurance. Our independent agents
                  shop around to find you the best coverage
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="relative">
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/corevalues/efficiencynew.png"
                alt=""
                className="rounded-lg "
              />
              <div className="absolute bottom-0 left-0 p-1 text-white md:p-2">
                <p className="text-sm font-semibold ">Efficiency</p>
                <p className="pb-1 text-xs lg:pb-2">
                  Developing swift and effective solutions and processes to
                  boost productivity and facilitate business growth.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="relative">
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/corevalues/opennessnew.png"
                alt=""
                className="rounded-lg "
              />
              <div className="absolute bottom-0 left-0 p-1 text-white md:p-2">
                <p className="text-sm font-semibold ">
                  Openness & Transparency
                </p>
                <p className="pb-1 text-xs lg:pb-2">
                  Upholding honesty and transparency in all processes,
                  information dissemination, and dealings, fostering a sense of
                  authenticity
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="relative">
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/corevalues/reliabilitynew.png"
                alt=""
                className="rounded-lg "
              />
              <div className="absolute bottom-0 left-0 p-1 text-white md:p-2">
                <p className="text-sm font-semibold ">Reliability</p>
                <p className="pb-1 text-xs lg:pb-2">
                  Building trust through consistent dependability in every
                  interaction across various facets of the channel—be it
                  availability, acquisition, performance, or service.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="relative">
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/corevalues/ingenuitynew.png"
                alt=""
                className="rounded-lg "
              />
              <div className="absolute bottom-0 left-0 p-1 text-white md:p-2">
                <p className="text-sm font-semibold">Ingenuity</p>
                <p className="pb-1 text-xs lg:pb-2">
                  Offering creative and innovative solutions tailored to bridge
                  the gap between home and hub life or address day-to-day
                  business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-1 py-10 mx-auto md:pb-12 lg:pb-16 lg:max-w-6xl">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="pb-4 text-xl font-medium text-center uppercase lg:pb-5 md:text-2xl lg:text-3xl"
        >
          A Journey of Milestones
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
          className=""
        >
          <RangeSlider
            MIN={0}
            MAX={6}
            steps={0.01}
            values={[0, 6]}
            setValues={(values) => swiperRef.current.slideTo(values)}
          />
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4.8,
              spaceBetween: 2.5,
            },
          }}
          spaceBetween={30}
          className="mt-4 mb-10 "
          //   navigation={true}
          //   modules={[Navigation]}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="w-1/3 h-full p-2 rounded-lg bg-blue-50/50"
            >
              <div
                data-aos="zoom-in"
                data-aos-delay={100 * index}
                data-aos-duration="500"
                className="w-full mb-2 overflow-hidden "
              >
                <p className="pb-3 font-semibold">{slide.date}</p>
                <div className="relative">
                  <img
                    src={slide.imgSrc}
                    alt={slide.name}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="pt-4 pb-2 text-sm font-semibold newsText">
                  {slide.name}
                </div>

                {/* <div className="text-xs lg:h-12">{slide.description}</div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
