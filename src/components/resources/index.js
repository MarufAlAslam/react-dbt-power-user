import React from "react";
import file from "../../assets/images/file.svg";
import youtube from "../../assets/images/youtube.svg";
import github from "../../assets/images/github.svg";
import slack from "../../assets/images/slack.svg";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="resources pb-[110px]">
      <div className="custom-container">
        <div className="text-center">
          <h2 className="text-white text-[40px] font-bold mb-[48px]">
            dbt-power-user Resources
          </h2>

          <div className="cards grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="card bg-[#0C171F] py-[50px] px-[24px] rounded-[18px]">
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-[10px]">
                  <img src={file} alt="" />
                  <span className="text-xl text-white font-[500]">
                    Doc (VS Code Marketplace)
                  </span>
                </div>

                <Link className="bg-[#164C64] rounded-full px-[24px] py-[8px]">
                  Open
                </Link>
              </div>
            </div>
            <div className="card bg-[#0C171F] py-[50px] px-[24px] rounded-[18px]">
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-[10px]">
                  <img src={youtube} alt="" />
                  <span className="text-xl text-white font-[500]">
                    Demo Video
                  </span>
                </div>

                <Link className="bg-[#164C64] rounded-full px-[24px] py-[8px]">
                  Watch now
                </Link>
              </div>
            </div>
            <div className="card bg-[#0C171F] py-[50px] px-[24px] rounded-[18px]">
              <img src={github} className="mb-[28px]" alt="" />
              <p className="text-lg text-white text-left opacity-50 mb-[130px]">
              Interested in contributing or reporting a bug? 
Join Us on GitHub. 
              </p>
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-[10px]">
                  <span className="text-xl text-white font-[500]">
                  Open source Github repository
                  </span>
                </div>

                <Link className="bg-[#164C64] rounded-full px-[24px] py-[8px]">
                 Open
                </Link>
              </div>
            </div>
            <div className="card bg-[#0C171F] py-[50px] px-[24px] rounded-[18px] h-full">
              <div className="flex justify-start items-center gap-[24px] mb-[28px]">
                <img src={slack} alt="" />
                <p className="text-2xl text-white">Slack channel in dbt workspace</p>
              </div>
              <p className="text-lg text-white text-left opacity-50 mb-[130px]">
              Get help from users in “tools-dbt-power-user” channel in dbt Slack community!
              </p>
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-[10px]">
                  <span className="text-xl text-white font-[500]">
                  Connect and Collaborate
                  </span>
                </div>

                <Link className="bg-[#164C64] rounded-full px-[24px] py-[8px]">
                 Join
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
