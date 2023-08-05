import React, { useEffect } from "react";
// import img1 from "../../assets/images/1.png";
// import img2 from "../../assets/images/2.png";
// import img3 from "../../assets/images/3.png";
// import img4 from "../../assets/images/4.png";
// import img5 from "../../assets/images/5.png";
// import img6 from "../../assets/images/6.png";
// import img7 from "../../assets/images/7.png";

import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

import { FaStar } from "react-icons/fa";

import avatar1 from "../../assets/images/avatar1.png";

import Carousel from "nuka-carousel";

const TrustedBy = () => {
  const [screenWidth, setScreenWidth] = React.useState();
  const [slideCount, setSlideCount] = React.useState(5);
  // const [parners, setPartners] = React.useState(7);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth < 768) {
      setSlideCount(1);
      // setPartners(2);
    } else if (screenWidth < 1024) {
      setSlideCount(3);
      // setPartners(4);
    } else {
      setSlideCount(5);
      // setPartners(7);
    }
  }, [screenWidth]);

  const testimonials = [
    {
      id: 1,
      name: "Guilherme da Silva",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review: "Improve a lot of the productivity ",
    },
    {
      id: 2,
      name: "Michael Weikman",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review: "Query / complie preview are great QOL features that I use often",
    },
    {
      id: 3,
      name: "Daniel Ladd ",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review: "Viewing upstream/downstream models provides a lot of context",
    },
    {
      id: 4,
      name: "Anthony Alvarez",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review: " Love the functionality to drill into model references",
    },
    {
      id: 5,
      name: "Graham Carman",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review: " Run parent / child models with a click of button",
    },
    {
      id: 6,
      name: "Boris Gracevic ",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review: "Best tool I have used for vs code",
    },
    {
      id: 7,
      name: "Juan Ramos",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review: "Makes dbt development so much easier",
    },
    {
      id: 8,
      name: "Jacon Matson",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review: "Lots of great QOL features",
    },
  ];
  return (
    <div
      className="trusted-by md:pt-[100px] pt-[60px] md:pb-[190px] pb-[150px]"
      id="testimonials"
    >
      <div className="custom-container">
        <h2 className="text-white text-center md:text-[40px] text-xl font-bold md:mb-[100px] mb-[50px]">
          Trusted by Thousands of dbt Users
        </h2>
      </div>

      {/* <Carousel
        slidesToShow={parners}
        slidesToScroll={1}
        autoplay={true}
        wrapAround={true}
        autoplayInterval={3000}
        cellSpacing={30}
        renderCenterLeftControls={({ previousSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => null}
        renderBottomCenterControls={() => null}
      >
        <div className="item text-center flex justify-center items-center">
          <img src={img1} className="mr-0" alt="" />
        </div>
        <div className="item text-center flex justify-center items-center">
          <img src={img2} alt="" />
        </div>
        <div className="item text-center flex justify-center items-center">
          <img src={img3} alt="" />
        </div>
        <div className="item text-center flex justify-center items-center">
          <img src={img4} alt="" />
        </div>
        <div className="item text-center flex justify-center items-center">
          <img src={img5} alt="" />
        </div>
        <div className="item text-center flex justify-center items-center">
          <img src={img6} alt="" />
        </div>
        <div className="item text-center flex justify-center items-center">
          <img src={img7} alt="" />
        </div>
      </Carousel> */}

      <div className="px-[15px] mt-[60px]">
        <Carousel
          slidesToShow={slideCount}
          slidesToScroll={1}
          autoplay={true}
          wrapAround={true}
          autoplayInterval={2000}
          cellSpacing={30}
          renderBottomCenterControls={() => null}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              className="btn btn-primary btn-circle btn-circle-left"
            >
              <img src={left} alt="" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              className="btn btn-primary btn-circle btn-circle-right"
            >
              <img src={right} alt="" />
            </button>
          )}
        >
          {testimonials.map((item) => (
            <div
              className="item bg-[#0F2632] p-[30px] rounded-[20px] h-full flex flex-col justify-between"
              key={item.id}
            >
              <div className="">
                <div className="flex justify-start items-center gap-[3px] mb-[16px]">
                  {Array(item.stars)
                    .fill()
                    .map((_, i) => (
                      <FaStar className="text-yellow-500" />
                    ))}
                </div>
                <p className="text-white opacity-[0.8] mb-[45px]">
                  {item.review}
                </p>
              </div>

              <div className="flex justify-start items-center gap-[15px]">
                <div className="avatar min-w-[50px] h-[50px] bg-[#E7E8EA] rounded-full flex justify-center items-center">
                  {/* first laters of each word of the name */}
                  {item.name &&
                    item.name.split(" ").map((word, index) => (
                      <span
                        className="uppercase text-xl font-bold text-[#9D9D9D]"
                        key={index}
                      >
                        {word[0]}
                      </span>
                    ))}
                </div>

                <div className="text-white">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-[#8390A3]">{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TrustedBy;
