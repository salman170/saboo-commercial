import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/grid";
import "swiper/css/pagination";
import RangeSlider from "../../components/RangeSlider";

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
          className="my-10 mySwiper"
          //   navigation={true}
          //   modules={[Navigation]}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="w-1/3 h-full p-2 ">
              <div
                data-aos="zoom-in"
                data-aos-delay={100 * index }
                data-aos-duration="500"
                className="w-full px-4 py-6 mb-2 text-center bg-white border rounded-lg shadow-lg lg:py-10 lg:px-6"
              >
                <div className="relative">
                  <img
                    src={slide.imgSrc}
                    alt={slide.name}
                    className="mx-auto rounded-full "
                  />
                </div>
                <div className="pt-4 pb-2 font-semibold">{slide.name}</div>
                <div className="text-xs lg:h-12">{slide.description}</div>
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
