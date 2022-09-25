import React from "react";

const Aside = () => {
  return (
    <aside className="hidden lg:sticky float-left h-screen w-28 bg-black top-0 z-30 flex-col lg:flex items-center">
      <nav className="ico-aside-container w-1/2 mt-[250%] flex flex-col ml-[auto] mr-[auto]">
        <div className="ico-aside mb-[20px]">
          <img
            src={`${process.env.PUBLIC_URL}/img/ico-aside/icon-zen.svg`}
            alt="Zen icon"
          />
        </div>
        <div className="ico-aside mb-[20px]">
          <img
            src={`${process.env.PUBLIC_URL}/img/ico-aside/icon-nat.svg`}
            alt="Natation icon"
          />
        </div>
        <div className="ico-aside mb-[20px]">
          <img
            src={`${process.env.PUBLIC_URL}/img/ico-aside/icon-bike.svg`}
            alt="Bike icon"
          />
        </div>
        <div className="ico-aside mb-[20px]">
          <img
            src={`${process.env.PUBLIC_URL}/img/ico-aside/icon-dmbel.svg`}
            alt="Dumbbell icon"
          />
        </div>
      </nav>
      <p className="copyright text-white text-xs -rotate-180 ml-[auto] mr-[auto] vertical-writing mt-[180%]">
        Copyright, Sportsee 2020
      </p>
    </aside>
  );
};

export default Aside;
