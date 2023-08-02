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
      name: "Laércio da Silva",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review:
        "Improves a lot the productivity. You don't need to use other tool to work for dbt, you can write, test, debug each model and observe all interactions directly in VS Code.",
    },
    {
      id: 2,
      name: "Laércio da Silva",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review:
        "Improves a lot the productivity. You don't need to use other tool to work for dbt, you can write, test, debug each model and observe all interactions directly in VS Code.",
    },
    {
      id: 3,
      name: "Laércio da Silva",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review:
        "Improves a lot the productivity. You don't need to use other tool to work for dbt, you can write, test, debug each model and observe all interactions directly in VS Code.",
    },
    {
      id: 4,
      name: "Laércio da Silva",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review:
        "Improves a lot the productivity. You don't need to use other tool to work for dbt, you can write, test, debug each model and observe all interactions directly in VS Code.",
    },
    {
      id: 5,
      name: "Laércio da Silva",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review:
        "Improves a lot the productivity. You don't need to use other tool to work for dbt, you can write, test, debug each model and observe all interactions directly in VS Code.",
    },
    {
      id: 6,
      name: "Laércio da Silva",
      designation: "Product Designer",
      avatar: avatar1,
      stars: 5,
      review:
        "Improves a lot the productivity. You don't need to use other tool to work for dbt, you can write, test, debug each model and observe all interactions directly in VS Code.",
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
              className="item bg-[#0F2632] p-[30px] rounded-[20px]"
              key={item.id}
            >
              <div className="flex justify-start items-center gap-[3px] mb-[16px]">
                {Array(item.stars)
                  .fill()
                  .map((_, i) => (
                    <FaStar className="text-yellow-500" />
                  ))}
              </div>
              <p className="text-white opacity-[0.8] mb-[45px]">
                This is so solid! LOTS of features. I especially like the
                ability to see parent / child models in a sidebar, and run them
                with the click of a button.
              </p>

              <div className="flex justify-start items-center gap-[15px]">
                <div className="avatar">
                  <img src={item.avatar} alt="" />
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
