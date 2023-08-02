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
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuClass, setMenuClass] = React.useState("");

  const toggleMenu = () => {
    if (menuClass === "") {
      setMenuClass("active");
    } else {
      setMenuClass("");
    }
  };

  const [activeSlide, setActiveSlide] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  return (
    <div className="header">
      <div className="custom-container">
        <div
          className={`menu-bg ${menuClass === "active" && "active"}`}
          onClick={toggleMenu}
        ></div>
        <nav className="flex justify-between items-center">
          <Link to="/" className="logo">
            <img src={logo} className="logo" alt="" />
          </Link>
          <div className="mobile">
            <button
              onClick={toggleMenu}
              className="menu-toggler px-5 py-3 rounded"
            >
              <FaBars className="text-white" />
            </button>
          </div>
          <ul
            className={`menu flex justify-center items-center md:pl-20 gap-[60px] ${
              menuClass === "active" && "active"
            }`}
          >
            <li>
              <a href="#resources" className="text-white lato">
                Resources
              </a>
            </li>
            <li>
              <a href="#features" className="text-white lato">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-white lato">
                Testimonials
              </a>
            </li>
          </ul>
          <Link
            to="/"
            className="md:block hidden border border-[#fff] text-[#11D588] py-[12px] px-[24px] rounded-full"
          >
            Install dbt Power User for VS Code
          </Link>
        </nav>

        {/* hero */}
        <section className="hero md:pt-[150px] pt-8 md:pb-[140px]">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="w-full md:w-[50%]">
              <h1 className="title">Do dbt Like Pros</h1>
              <h2 className="subtitle md:text-2xl text-lg text-white font-[600]">
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

              <div className="mt-[48px] md:text-left text-center">
                <Link
                  to="/"
                  className="bg-[#11D588] text-[#082247] md:text-lg inline-flex mb-4 py-[14px] px-[32px] rounded-full"
                >
                  Install dbt Power User for VS Code
                </Link>
                <p className="text-sm text-white opacity-[0.8] md:mb-0 mb-12">
                  or download from VS Code Marketplace
                </p>
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
