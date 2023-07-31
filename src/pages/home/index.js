import React from "react";
import Resources from "../../components/resources";
import Features from "../../components/features";
import TrustedBy from "../../components/trusted-by";

const Home = () => {
  return <>
    <h2 className="text-white">
      <Resources/>
      <Features/>
      <TrustedBy/>
    </h2>
  </>;
};

export default Home;
