import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import check from "../../assets/images/check.svg";
// import sliderPlaceholder from "../../assets/images/slider-placeholder.png";
// import Carousel from "nuka-carousel";

// import tesimonial1 from "../../assets/images/testimonial1.png";
// import tesimonial2 from "../../assets/images/testimonial2.png";
// import tesimonial3 from "../../assets/images/testimonial3.png";
// import tesimonial4 from "../../assets/images/testimonial4.png";
import { FaBars } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

import testimonialCard from "../../assets/images/slider-bg.png";
import tm from "../../assets/images/tm.svg";

const Header = () => {
  const [menuClass, setMenuClass] = React.useState("");

  const toggleMenu = () => {
    if (menuClass === "") {
      setMenuClass("active");
    } else {
      setMenuClass("");
    }
  };

  const testimonials = [
    {
      id: 1,
      items: [
        {
          id: 1,
          name: "Guilherme da Silva",
          feedback: (
            <p className="text-[#333]">
              Improve a lot of the{" "}
              <b className="text-[#FF754C]">productivity</b>
            </p>
          ),
        },
        {
          id: 2,
          name: "Michael Weikman",
          feedback: (
            <p className="text-[#333]">
              <b className="text-[#FF754C]">Query / complie preview</b> are
              great QOL features that I use often
            </p>
          ),
        },
      ],
    },

    {
      id: 2,
      items: [
        {
          id: 1,
          name: "Daniel Ladd",
          feedback: (
            <p className="text-[#333]">
              <b className="text-[#FF754C]">
                Viewing upstream/downstream models
              </b>{" "}
              provides a lot of context
            </p>
          ),
        },
        {
          id: 2,
          name: "Anthony Alvarez",
          feedback: (
            <p className="text-[#333]">
              Love the functionality to drill into model references
            </p>
          ),
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          id: 1,
          name: "Graham Carman",
          feedback: (
            <p className="text-[#333]">
              <b className="text-[#FF754C]">Run parent / child models</b> with a
              click of button
            </p>
          ),
        },
        {
          id: 2,
          name: "Boris Gracevic",
          feedback: (
            <p className="text-[#333]">
              <b className="text-[#FF754C]">Best tool</b> I have used for vs
              code
            </p>
          ),
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          id: 1,
          name: "Juan Ramos",
          feedback: (
            <p className="text-[#333]">
              Makes dbt development so much{" "}
              <b className="text-[#FF754C]">easier</b>
            </p>
          ),
        },
        {
          id: 2,
          name: "Jacon Matson",
          feedback: (
            <p className="text-[#333]">
              Lots of <b className="text-[#FF754C]">great QOL features</b>
            </p>
          ),
        },
      ],
    },
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

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
                  onMouseEnter={() => setActiveSlide(0)}
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
                  onMouseEnter={() => setActiveSlide(1)}
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
                  onMouseEnter={() => setActiveSlide(2)}
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
                  onMouseEnter={() => setActiveSlide(3)}
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
              {/* <Carousel
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
              </Carousel> */}

              <div className="testimonial-card">
                <div className="card relative">
                  <img src={testimonialCard} className="w-full h-full" alt="" />

                  <img
                    src={tm}
                    className="absolute -right-[50px] top-[50%] -translate-y-[50%]"
                    alt=""
                  />

                  <div className="testimonials w-[80%] flex flex-col gap-[30px] h-full absolute top-[24%] -left-[50px]">
                    {testimonials[activeSlide].items.map((item, index) => (
                      <div
                        key={index}
                        className={`${index === 1 ? "ml-auto" : "mr-auto"}  max-w-[80%]`}
                      >
                        <div className="flex justify-start items-start bg-white rounded-[12px] shadow p-[12px] gap-[12px]">
                          <div className="avatar min-w-[94px] h-[94px] bg-[#E7E8EA] rounded-[12px] flex justify-center items-center">
                            {/* first laters of each word of the name */}
                            {item.name &&
                              item.name.split(" ").map((word, index) => (
                                <span
                                  className="uppercase text-4xl font-bold text-[#9D9D9D]"
                                  key={index}
                                >
                                  {word[0]}
                                </span>
                              ))}
                          </div>

                          <div className="feedback">
                            <p className="text-black font-bold mb-[7px]">
                              {item.name}
                            </p>
                            {item.feedback}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="btn bg-[#FF754C] text-white h-[50px] flex justify-center items-center gap-3 px-5 py-3 rounded-[10px] border border-white absolute z-10 -top-[25px] left-[50%] -translate-x-[50%]">
                    <LuDownload className="text-lg" />
                    <span>67,387 installs</span>
                  </button>

                  <p className="info text-[12px] text-[#4E809D] absolute bottom-[15px] left-[15px]">
                    Note: Above reviews are from VS Code Marketplace
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hero */}
      </div>
    </div>
  );
};

export default Header;
