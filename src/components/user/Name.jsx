import React from "react";
import PropTypes from "prop-types";

const Name = ({ user }) => {
  return (
    <div className="hello-user mt-[70px] mb-[70px]">
      <h1 className="text-5xl mb-[40px] font-bold">
        Bonjour <span className="user text-[#FF0101]">{user._firstName}</span>
      </h1>
      <h2 className="goals text-[1.125rem]">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  );
};

Name.propTypes = {
  user: PropTypes.object,
};

export default Name;
