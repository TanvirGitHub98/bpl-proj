import React from "react";
import heroBgImg from "../../assets/bg-shadow.png";
import bannerMainImg from "../../assets/banner-main.png";

const HeroSection = (props) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroBgImg})` }}
        className="bg-cover bg-center bg-no-repeat bg-[#131313] min-h-[500px] max-w-[1320px] mx-auto rounded-3xl"
      >
        <div className="text-white  flex flex-col items-center gap-4">
          <img src={bannerMainImg} alt="banner main img" />
          <h1 className="text-center text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <h5 className="text-center">Beyond Boundaries Beyond Limits</h5>
          <button className="btn bg-[#E7FE29] rounded-xl b  outline-10  outline-[#EFE29] ">
            Claim Free Credit
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
