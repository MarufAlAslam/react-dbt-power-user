import React from "react";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";

import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

import { FaStar } from "react-icons/fa";

import avatar1 from "../../assets/images/avatar1.png";

import Carousel from "nuka-carousel";

const TrustedBy = () => {
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
    <div className="trusted-by pt-[100px] pb-[190px]">
      <div className="custom-container">
        <h2 className="text-white text-center md:text-[40px] text-2xl font-bold mb-[100px]">
          Trusted by Thousands of dbt Users
        </h2>
      </div>

      <div className="flex justify-between items-center px-[15px] mb-[60px]">
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img2} alt="" />
        </div>
        <div className="item">
          <img src={img3} alt="" />
        </div>
        <div className="item">
          <img src={img4} alt="" />
        </div>
        <div className="item">
          <img src={img5} alt="" />
        </div>
        <div className="item">
          <img src={img6} alt="" />
        </div>
        <div className="item">
          <img src={img7} alt="" />
        </div>
      </div>

      <div className="px-[15px]">
        <Carousel
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          wrapAround={true}
          autoplayInterval={2000}
          cellSpacing={30}
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
