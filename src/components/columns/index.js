import React from "react";
import { Link } from "react-router-dom";

import ss1 from "../../assets/images/ss1.png";
import ss2 from "../../assets/images/ss2.png";
import ss3 from "../../assets/images/ss3.png";
import ss4 from "../../assets/images/ss4.png";

const Colums = () => {
  return (
    <div className="columns py-[140px]">
      <div className="custom-container">
        <div className="column-item flex justify-between items-center mb-[140px]">
          <div className="md:w-1/2 w-full p-[114px]">
            <h2 className="lexend text-white text-[30px] font-bold mb-[10px]">
              Instantly test your dbt query
            </h2>
            <p className="text-[#ccc]">
              Test the query in your dbt model for instant feedback
            </p>
            <div className="mt-[48px] ">
              <Link
                to="/"
                className="bg-[#11D588] text-[#082247] text-lg py-[14px] px-[32px] rounded-full"
              >
                Install dbt Power User for VS Code
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={ss1} className="w-full" alt="" />
          </div>
        </div>

        <div className="column-item flex justify-between items-center mb-[140px]">
          <div className="md:w-1/2 w-full">
            <img src={ss2} className="w-full" alt="" />
          </div>
          <div className="md:w-1/2 w-full p-[114px]">
            <h2 className="lexend text-white text-[30px] font-bold mb-[10px]">
              Quickly navigate your dbt project
            </h2>
            <p className="text-[#ccc]">
              Click through your dbt references, sources, lineage and
              documentation
            </p>
            <div className="mt-[48px] ">
              <Link
                to="/"
                className="bg-[#11D588] text-[#082247] text-lg py-[14px] px-[32px] rounded-full"
              >
                Install dbt Power User for VS Code
              </Link>
            </div>
          </div>
        </div>

        <div className="column-item flex justify-between items-center mb-[140px]">
          <div className="md:w-1/2 w-full p-[114px]">
            <h2 className="lexend text-white text-[30px] font-bold mb-[10px]">
              Click and execute common dbt commands
            </h2>
            <p className="text-[#ccc]">
              Compile, run and test your dbt models with a simple click
            </p>
            <div className="mt-[48px] ">
              <Link
                to="/"
                className="bg-[#11D588] text-[#082247] text-lg py-[14px] px-[32px] rounded-full"
              >
                Install dbt Power User for VS Code
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={ss3} className="w-full" alt="" />
          </div>
        </div>

        <div className="column-item flex justify-between items-center mb-[140px]">
          <div className="md:w-1/2 w-full">
            <img src={ss4} className="w-full" alt="" />
          </div>
          <div className="md:w-1/2 w-full p-[114px]">
            <h2 className="lexend text-white text-[30px] font-bold mb-[10px]">
              Generate boilerplate dbt code
            </h2>
            <p className="text-[#ccc]">
              Generate documentation and models based on table metadata
            </p>
            <div className="mt-[48px] ">
              <Link
                to="/"
                className="bg-[#11D588] text-[#082247] text-lg py-[14px] px-[32px] rounded-full"
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
