import React from "react";

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src={`${process.env.PUBLIC_URL}/img/logo.svg`}
        alt="logo Sportsee"
        className="logo w-[178px] mx-[28px] my-[18px]"
      />
    </div>
  );
};

export default Logo;
