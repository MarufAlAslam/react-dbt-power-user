import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import github from "../../assets/images/github-sm.svg";
import slack from "../../assets/images/slack-sm.svg";

const Footer = () => {
  return (
    <div className="footer py-[40px] bg-[#0C171F]">
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>

          <div className="flex justify-end items-center gap-[16px]">
            <Link to="/">
              <img src={github} alt="" />
            </Link>
            <Link to="/">
              <img src={slack} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
