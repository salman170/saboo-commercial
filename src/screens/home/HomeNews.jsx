import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/grid";
import "swiper/css/pagination";
import RangeSlider from "../../components/RangeSlider";
import { date } from "yup";

const HomeNews = () => {
  useEffect(() => {
    AOS.init();
    //    AOS.init({ once: true });
  }, []);

  // Ref to access the Swiper instance
  const swiperRef = useRef(null);

  const slidesData = [
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/news4.png?mw=1920",
      name: "Maruti Suzuki launches the All-New Tour H1 – India’s favourite entry-level commercial hatchback",
      date: "09/06/2023",
      link: "https://www.marutisuzuki.com/corporate/media/press-releases/2023/june/maruti-suzuki-launches-the-all-new-tour-h1-indias-favourite-entry-level-commercial-hatchback",
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/news5.png?mw=3840",
      name: "Maruti Suzuki introduces new, more powerful Super Carry",
      date: "17/04/2023",
      link: "https://www.marutisuzuki.com/corporate/media/press-releases/2023/april/maruti-suzuki-introduces-new-more-powerful-super-carry",
    },

    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/news1.png?mw=3840",
      name: "Maruti Suzuki Commercial Vehicles: Taking India's Growth Story Ahead",
      date: "07/03/2023",
      link: "https://trucks.cardekho.com/en/news/detail/maruti-suzuki-commercial-vehicles-taking-india-s-growth-story-ahead-1947.html",
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/news2.png?mw=3840",
      name: "5 Key Things To Keep In Mind When Buying A Mini-Truck in India",
      date: "30/11/2022",
      link: "https://trucks.cardekho.com/en/news/detail/5-key-things-to-keep-in-mind-when-buying-a-mini-truck-in-india-1915.html",
    },

    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/news3.png?mw=3840",
      name: "Maruti Suzuki Commercial: a one-stop solution for customers’ business needs",
      date: "25/02/2022 ",
      link: "https://www.autocarindia.com/auto-features/branded-content-maruti-suzuki-commercial-a-one-stop-solution-for-customers-business-needs-423669",
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/news8.png?mw=3840",
      name: "'4 Saal Tarakki Ke' India’s powerful mini truck, Super Carry celebrates 4 phenomenal years",
      date: "25/12/2020",
      link: "https://www.marutisuzuki.com/corporate/media/press-releases/2020/december/4-saal-tarakki-ke-india-s-powerful-mini-truck-super-carry-celebrates-4-phenomenal-years",
    },

    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/news9.png?mw=3840",
      name: "Maruti Suzuki expands the Commercial network portfolio with extensive Tour range",
      date: "16/03/2020",
      link: "https://www.marutisuzuki.com/corporate/media/press-releases/2020/march/maruti-suzuki-expands-the-commercial-network-portfolio-with-extensive-tour-range",
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/news6.png?mw=3840",
      name: "Maruti Suzuki Super Carry celebrates three glorious years in India with over 50,000 delighted customers",
      date: "12/12/2019",
      link: "https://www.marutisuzuki.com/corporate/media/press-releases/2019/december/maruti-suzuki-super-carry-celebrates-three-glorious-years-in-india",
    },

    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/newsimgs.png?mw=3840",
      name: "Maruti Suzuki ups the ante in Commercial Segment with 300th showroom",
      date: "13/05/2019",
      link: "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/newsimgs.png?mw=3840",
    },
    {
      imgSrc:
        "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/newsandarticle/newsimgs.png?mw=3840",
      name: "Fastest rollout of auto retail channel: Maruti Suzuki unveils its 250th Commercial Showroom",

      date: "02/11/2018",
      link: "https://www.marutisuzuki.com/corporate/media/press-releases/2018/november/fastest-rollout-of-auto-retail-channel-maruti-suzuki-unveils-its-250th-commercial-showroom",
    },
  ];

  //   const handleNext = () => {
  //     if (
  //       swiperRef.current &&
  //       swiperRef.current.activeIndex < swiperRef.current.slides.length - 1
  //     ) {
  //       setActiveSlide(activeSlide + 1);
  //     }
  //   };

  //   // Function to handle the "Previous" button click
  //   const handlePrevious = () => {
  //     if (swiperRef.current && activeSlide > 0) {
  //       setActiveSlide(activeSlide - 1);
  //     }
  //   };

  // Update the Swiper instance when the active slide index changes

  return (
    <div className="px-1 pb-10 md:pb-12 lg:pb-16">
      <div className="container mx-auto mb-10 lg:max-w-4xl ">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="pb-4 text-xl font-medium text-center uppercase lg:pb-5 md:text-2xl lg:text-3xl"
        >
          IN THE NEWS
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="text-sm text-center lg:px-10 "
        >
          Trending in the latest news reports, Maruti Suzuki Commercial has
          garnered attention and dominated headlines, showcasing its impactful
          presence across industries.
        </div>
      </div>
      <div className="container px-1 mx-auto">
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
              slidesPerView: 5,
              spaceBetween: 2,
            },
          }}
          spaceBetween={30}
          className="my-10 mySwiper2"
          //   navigation={true}
          //   modules={[Navigation]}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="w-1/3 h-full p-2 ">
              <div
                data-aos="zoom-in"
                data-aos-delay={100 * index}
                data-aos-duration="500"
                className="w-full mb-2 overflow-hidden bg-white "
              >
                <a href={slide.link} target="_blank" rel="noreferrer">
                  <div className="relative">
                    <img
                      src={slide.imgSrc}
                      alt={slide.name}
                      className="w-full rounded-lg"
                    />
                  </div>
                </a>
                <div className="pt-4 pb-2 text-sm font-semibold newsText">
                  {slide.name}
                </div>
                <div className="text-xs">{slide.date}</div>
                <a href={slide.link} target="_blank" rel="noreferrer">
                  <button className="px-4 py-1.5 text-xs bg-white border rounded hover:shadow-xl shadow-black text-primary hover:text-white hover:bg-primary mt-2 ">
                    Read Now
                  </button>{" "}
                </a>
                {/* <div className="text-xs lg:h-12">{slide.description}</div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="container flex justify-between mx-auto xl:max-w-5xl ">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div> */}
      <div className="container mx-auto xl:max-w-4xl ">
        <RangeSlider
          MIN={0}
          MAX={10}
          steps={0.01}
          values={[0, 10]}
          setValues={(values) => swiperRef.current.slideTo(values)}
        />
      </div>
    </div>
  );
};

export default HomeNews;
