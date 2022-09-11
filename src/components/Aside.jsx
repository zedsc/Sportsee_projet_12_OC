import React from "react";

const Aside = () => {
  return (
    <aside className="bg-black w-[107px] h-screen flex flex-col items-center">
      <nav className="ico-aside-container w-1/2 mt-[200%]">
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
      <p className="copyright text-white text-xs -rotate-90 w-[150px] mt-[180%]">
        Copyright, Sportsee 2020
      </p>
    </aside>
  );
};

export default Aside;
