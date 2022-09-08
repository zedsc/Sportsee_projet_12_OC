import React from "react";

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src={`${process.env.PUBLIC_URL}/img/logo.svg`}
        alt="logo Sportsee"
        className="logo"
      />
    </div>
  );
};

export default Logo;
