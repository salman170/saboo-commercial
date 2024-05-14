import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { IoVideocam } from "react-icons/io5";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    //    AOS.init({ once: true });
  }, []);

  const slidesData = [
    [
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/arun-jangra.png?mw=256",
        name: "Arun Jangra",
        description:
          "Embark on Arun's empowering journey as he unveils the true potential of the Maruti Suzuki Super Carrys.",
        link: "https://youtu.be/CGzlqEi8aKI",
      },
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/parmeshwar-dandi.png?mw=256",
        name: "Parmeshwar Dandi",
        description:
          "देखिए कैसे परमेश्वर सुपरकैरी के साथ अपनी जिंदगी और बिजनेस को ले जा रहे है सफलता की ओर।",
        link: "https://youtu.be/MZqyMHYSHBw",
      },
    ],
    [
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/pralhad-kshatriya.png?mw=256",
        name: "Pralhad Kshatriya",
        description:
          "महाराष्ट्र के प्रहलाद अपनी दमदार सवारी सुपर कैरी और उसके शक्तिशाली इंजन और आरामदायक ड्राइविंग पर करते हैं पूरा भरोसा|",
        link: "https://youtu.be/0HOE8agdnsY",
      },
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/deepak-shaukeen.png?mw=256",
        name: "Deepak Shaukeen",
        description:
          "बेहतर माइलेज, विशाल केबिन, CNG के साथ-साथ एक 5 लीटर का इमरजेंसी पेट्रोल टैंक के साथ Maruti Suzuki Super Carry है दीपक का परफ़ेक्ट बिज़नेस पार्टनर|",
        link: "https://youtu.be/rsXAeX7k-og",
      },
    ],
    [
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/jagdish-khatri.png?mw=96",
        name: "Jagdish Khatri",
        description:
          "Discover the inspiring story of Jagdish, who achieved success with his trust in Maruti Suzuki Commercial.",
        link: "https://youtu.be/zU8KydYFLOs",
      },
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/jaspreet-singh.png?mw=96",
        name: "Jaspreet Singh",
        description:
          "यह एक Maruti Suzuki Super Carry से शुरू होकर अब चार होने तक की, जसप्रीत के ट्रांसपोर्ट व्यवसाय की तरक्की की दमदार कहानी है|",
        link: "https://youtu.be/81s8Ky6cyuI",
      },
    ],
    [
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/amit-mankani.png?mw=96",
        name: "Amit Mankani",
        description:
          "Explore Amit's journey as he found the perfect business partner in the Maruti Suzuki Super Carry, elevating his food business.",
        link: "https://youtu.be/HFRfmRoBLNA",
      },
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/kunal-gujale.png?mw=96",
        name: "Kunal Gujale",
        description:
          "देखिए कैसे मारुति सुज़ुकी कमर्शियल की मदद से कुणाल ने चुना अपना तरक़्क़ी का साथी।",
        link: "https://youtu.be/DMuSONLbIeo",
      },
    ],
    [
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/akashdeep.png?mw=96",
        name: "Aakashdeep",
        description:
          "यह Maruti Suzuki Super Carry के साथ आकाशदीप की बाधाओं को पार करने और सफलता पाने की तरक्की की दमदार कहानी है|",
        link: "https://youtu.be/3fHpTjj0oGU",
      },
      {
        imgSrc:
          "https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/testimonials-updated/haresh-rathore.png?mw=96",
        name: "Haresh Rathor",
        description:
          "Witness Haresh enjoying comfortable driving and savings on the go with his Maruti Suzuki Super Carry.",
        link: "https://youtu.be/fsfkZJYQs20",
      },
    ],
  ];
  return (
    <div className="px-1 py-10 md:py-12 lg:py-16">
      <div className="container mx-auto mb-10 ">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="pb-4 text-xl font-medium text-center uppercase lg:pb-5 md:text-2xl lg:text-3xl"
        >
          WHO WE ARE
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="text-center "
        >
          With our wide range of versatile and reliable mobility solutions, we
          are the drivers of India’s growth.​
        </div>
      </div>
      <div className="container px-2 mx-auto xl:max-w-7xl">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          <img
            src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/map.gif"
            alt=""
          />
          <div className="hidden w-full md:block">
            <div className="w-full h-full p-10 border-t border-gray-200 shadow-xl rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-9 md:py-10 lg:py-14">
        <img
          src={require("../../assets/home/about.png")}
          alt=""
          loading="lazy"
          className="mx-auto"
        />
      </div>
      <div>
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="container mx-auto text-xl font-medium text-center uppercase md:text-2xl lg:text-3xl "
        >
          TESTIMONIALS
        </div>
        <div className="relative w-full px-2 ">
          <div className="container mx-auto xl:max-w-5xl ">
            <Swiper
              //   grid={{
              //     rows: 2,
              //   }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 6,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 8,
                },
              }}
              // loop={true}
              // autoplay={{
              //   delay: 6000,
              //   disableOnInteraction: false,
              // }}
              spaceBetween={30}
              className="my-10 mySwiper"
              navigation={true}
              modules={[Navigation]}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index} className="h-full ">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay={100 * (index + 1)}
                    data-aos-duration="500"
                    className="w-full px-4 py-6 mb-2 text-center  border rounded-lg shadow-lg lg:py-8 lg:px-6 bg-gradient-to-t from-[#d6e7ff] via-[#EDF4FE] to-white"
                  >
                    <div className="relative">
                      <img
                        src={slide[0].imgSrc}
                        alt={slide[0].name}
                        className="mx-auto rounded-full "
                      />
                      <div className="absolute bottom-0 left-[30%] bg-white p-1 h-9 w-9 rounded-full shadow-lg shadow-black flex justify-center items-center">
                        <IoVideocam className="text-xl lg:text-2xl text-primary" />
                      </div>
                    </div>
                    <div className="pt-4 pb-2 font-semibold">
                      {slide[0].name}
                    </div>
                    <div className="text-xs lg:min-h-20">
                      {slide[0].description}
                    </div>
                  </div>
                  <div
                    data-aos="zoom-in"
                    // data-aos-delay={200 * (index + 1)}
                    data-aos-duration="500"
                    className="w-full px-4 py-6 mb-2 text-center  border rounded-lg shadow-lg lg:py-8 lg:px-6 bg-gradient-to-t from-[#d6e7ff] via-[#EDF4FE] to-white"
                  >
                    <div className="relative">
                      <img
                        src={slide[1].imgSrc}
                        alt={slide[1].name}
                        className="mx-auto rounded-full "
                      />
                      <div className="absolute bottom-0 left-[30%] bg-white p-1 h-9 w-9 rounded-full shadow-lg shadow-black flex justify-center items-center">
                        <IoVideocam className="text-lg lg:text-xl text-primary" />
                      </div>
                    </div>
                    <div className="pt-4 pb-2 font-semibold">
                      {slide[1].name}
                    </div>
                    <div className="text-xs lg:min-h-20">
                      {slide[1].description}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
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
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
