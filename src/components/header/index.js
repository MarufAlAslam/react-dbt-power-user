import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="custom-container">
        <nav className="flex justify-between items-center">
          <Link to="/" className="logo">
            <img src={logo} className="logo" alt="" />
          </Link>
          <ul className="flex justify-center items-center gap-[60px]">
            <li>
                <Link to="/" className="text-white lato">Resources</Link>
            </li>
            <li>
                <Link to="/" className="text-white lato">Features</Link>
            </li>
            <li>
                <Link to="/" className="text-white lato">Testimonials</Link>
            </li>
          </ul>
          <Link to="/" className="border border-[#fff] text-[#11D588] text-lg py-[12px] px-[24px] rounded-full">
            Start for free
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
