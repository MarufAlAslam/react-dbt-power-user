import React from "react";
import { Link } from "react-router-dom";

import ss1 from "../../assets/images/visualize-result-set.gif";
import ss2 from "../../assets/images/2.gif";
import ss3 from "../../assets/images/3.gif";
import ss4 from "../../assets/images/4.gif";

const Colums = () => {
  return (
    <div className="columns md:pb-[140px] pb-[70px]">
      <div className="custom-container">
        <div
          id="col1"
          className="column-item flex md:flex-row flex-col justify-between items-center md:pt-[140px] pt-[50px]"
        >
          <div className="md:w-1/2 w-full md:p-[114px] pb-[40px] md:text-left text-center">
            <h2 className="lexend text-white md:text-[30px] text-2xl font-bold mb-[10px]">
              Instantly test your dbt query
            </h2>
            <p className="text-[#ccc]">
              Test the query in your dbt model for instant feedback
            </p>
            <div className="mt-[48px] ">
              <Link
                to="/"
                className="bg-[#11D588] block text-[#082247] md:text-lg text-sm md:py-[14px] py-[10px] md:px-[32px] px-[20px] rounded-full"
              >
                Install dbt Power User for VS Code
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src={ss1}
              className="w-full rounded-[30px] border-2 border-[#59697966]"
              alt=""
            />
          </div>
        </div>

        <div
          id="col2"
          className="column-item flex md:flex-row flex-col-reverse justify-between items-center md:pt-[140px] pt-[50px]"
        >
          <div className="md:w-1/2 w-full">
            <img
              src={ss2}
              className="w-full border-2 border-[#59697966] rounded-[30px]"
              alt=""
            />
          </div>
          <div className="md:w-1/2 w-full md:p-[114px] pb-[40px] md:text-left text-center">
            <h2 className="lexend text-white md:text-[30px] text-2xl font-bold mb-[10px]">
              Quickly navigate your dbt project
            </h2>
            <p className="text-[#ccc]">
              Click through your dbt references, sources, lineage and
              documentation
            </p>
            <div className="mt-[48px] ">
              <Link
                to="/"
                className="bg-[#11D588] block text-[#082247] md:text-lg text-sm md:py-[14px] py-[10px] md:px-[32px] px-[20px] rounded-full"
              >
                Install dbt Power User for VS Code
              </Link>
            </div>
          </div>
        </div>

        <div
          id="col3"
          className="column-item flex md:flex-row flex-col justify-between items-center md:pt-[140px] pt-[50px]"
        >
          <div className="md:w-1/2 w-full md:p-[114px] pb-[40px] md:text-left text-center">
            <h2 className="lexend text-white md:text-[30px] text-2xl font-bold mb-[10px]">
              Click and execute common dbt commands
            </h2>
            <p className="text-[#ccc]">
              Compile, run and test your dbt models with a simple click
            </p>
            <div className="mt-[48px] ">
              <Link
                to="/"
                className="bg-[#11D588] block text-[#082247] md:text-lg text-sm md:py-[14px] py-[10px] md:px-[32px] px-[20px] rounded-full"
              >
                Install dbt Power User for VS Code
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src={ss3}
              className="w-full border-2 border-[#59697966] rounded-[30px]"
              alt=""
            />
          </div>
        </div>

        <div
          id="col4"
          className="column-item flex md:flex-row flex-col-reverse justify-between items-center md:pt-[140px] pt-[50px]"
        >
          <div className="md:w-1/2 w-full">
            <img
              src={ss4}
              className="w-full border-2 border-[#59697966] rounded-[30px]"
              alt=""
            />
          </div>
          <div className="md:w-1/2 w-full md:p-[114px] pb-[40px] md:text-left text-center">
            <h2 className="lexend text-white md:text-[30px] text-2xl font-bold mb-[10px]">
              Generate boilerplate dbt code
            </h2>
            <p className="text-[#ccc]">
              Generate documentation and models based on table metadata
            </p>
            <div className="mt-[48px] ">
              <Link
                to="/"
                className="bg-[#11D588] block text-[#082247] md:text-lg text-sm md:py-[14px] py-[10px] md:px-[32px] px-[20px] rounded-full"
              >
                Install dbt Power User for VS Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colums;
