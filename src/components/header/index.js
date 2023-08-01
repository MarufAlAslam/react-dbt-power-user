import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import check from "../../assets/images/check.svg";
// import sliderPlaceholder from "../../assets/images/slider-placeholder.png";
import Carousel from "nuka-carousel";

import tesimonial1 from "../../assets/images/testimonial1.png";
import tesimonial2 from "../../assets/images/testimonial2.png";
import tesimonial3 from "../../assets/images/testimonial3.png";
import tesimonial4 from "../../assets/images/testimonial4.png";

const Header = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  return (
    <div className="header">
      <div className="custom-container">
        <nav className="flex justify-between items-center">
          <Link to="/" className="logo">
            <img src={logo} className="logo" alt="" />
          </Link>
          <ul className="flex justify-center items-center gap-[60px]">
            <li>
              <Link to="/" className="text-white lato">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white lato">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white lato">
                Testimonials
              </Link>
            </li>
          </ul>
          <Link
            to="/"
            className="border border-[#fff] text-[#11D588] text-lg py-[12px] px-[24px] rounded-full"
          >
            Start for free
          </Link>
        </nav>

        {/* hero */}
        <section className="hero pt-[150px] pb-[140px]">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="w-full md:w-[50%]">
              <h1 className="title">Do dbt Like Pros</h1>
              <h2 className="subtitle text-2xl text-white font-[600]">
                dbt Power User VS Code Extension
              </h2>

              <div className="links mt-[36px]">
                <a
                  onMouseEnter={() => setIndex(0)}
                  href="#col1"
                  className={`inline-flex justify-start items-center gap-[8px] p-[8px] rounded-md ${
                    activeSlide === 0 && "active"
                  }`}
                >
                  <img src={check} className="check" alt="" />{" "}
                  <span className="text-white opacity-[0.8]">
                    Instantly test your dbt query
                  </span>
                </a>
                <a
                  onMouseEnter={() => setIndex(1)}
                  href="#col2"
                  className={`inline-flex justify-start items-center gap-[8px] p-[8px] rounded-md ${
                    activeSlide === 1 && "active"
                  }`}
                >
                  <img src={check} className="check" alt="" />{" "}
                  <span className="text-white opacity-[0.8]">
                    Instantly Quickly navigate your dbt project
                  </span>
                </a>
                <a
                  onMouseEnter={() => setIndex(2)}
                  href="#col3"
                  className={`inline-flex justify-start items-center gap-[8px] p-[8px] rounded-md ${
                    activeSlide === 2 && "active"
                  }`}
                >
                  <img src={check} className="check" alt="" />{" "}
                  <span className="text-white opacity-[0.8]">
                    Click and execute common dbt commands
                  </span>
                </a>
                <a
                  onMouseEnter={() => setIndex(3)}
                  href="#col4"
                  className={`inline-flex justify-start items-center gap-[8px] p-[8px] rounded-md ${
                    activeSlide === 3 && "active"
                  }`}
                >
                  <img src={check} className="check" alt="" />{" "}
                  <span className="text-white opacity-[0.8]">
                    Generate boilerplate dbt code
                  </span>
                </a>
              </div>

              <div className="mt-[48px] ">
                <Link
                  to="/"
                  className="bg-[#11D588] text-[#082247] text-lg py-[14px] px-[32px] rounded-full"
                >
                  Install dbt Power User for VS Code
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <Carousel
                autoplay={true}
                slideIndex={index}
                autoplayInterval={5000}
                pauseOnHover={false}
                pauseOnFocus={false}
                speed={1000}
                afterSlide={(slideIndex) => setActiveSlide(slideIndex)}
                dragging={false}
                wrapAround={true}
                renderCenterLeftControls={({ previousSlide }) => null}
                renderCenterRightControls={({ nextSlide }) => null}
                renderBottomCenterControls={null}
              >
                <div className="slider-item">
                  <img src={tesimonial1} className="w-full" alt="" />
                </div>
                <div className="slider-item">
                  <img src={tesimonial2} className="w-full" alt="" />
                </div>
                <div className="slider-item">
                  <img src={tesimonial3} className="w-full" alt="" />
                </div>
                <div className="slider-item">
                  <img src={tesimonial4} className="w-full" alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        {/* hero */}
      </div>
    </div>
  );
};

export default Header;
