import React from "react";

const Features = () => {
  return (
    <div className="md:pb-[140px] pb-[60px]" id="features">
      <div className="custom-container">
        <div className="text-center">
          <h2 className="md:text-[40px] text-2xl font-bold text-white mb-[56px]">
            Hear first about our upcoming <br className="md:block hidden" /> new
            features!!
          </h2>

          <form
            action=""
            className="md:w-1/3 w-full mx-auto bg-white p-[3px] rounded-full overflow-hidden flex justify-between items-center"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="px-[22px] py-[12px] text-black outline-none w-full placeholder:text-[#8390A3] bg-white h-full border-0"
              name=""
              id=""
            />

            <button
              type="submit"
              className="rounded-full bg-[#11D588] text-[#082247] text-lg font-[500] h-full px-[32px] py-[12px]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Features;
