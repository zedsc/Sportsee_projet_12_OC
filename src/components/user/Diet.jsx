import React from "react";
import PropTypes from "prop-types";

/**
 * @returns A component with the diet's name, value and unit.
 */
const Diet = ({ diet }) => {
  let img, unit, name;

  /**
   * Set the component content.
   */
  if (diet.includes("calorieCount")) {
    img = "calories-icon";
    unit = "kCal";
    name = "Calories";
  } else if (diet.includes("proteinCount")) {
    img = "protein-icon";
    name = "Protéines";
    unit = "g";
  } else if (diet.includes("carbohydrateCount")) {
    img = "carbs-icon";
    name = "Glucides";
    unit = "g";
  } else if (diet.includes("lipidCount")) {
    img = "fat-icon";
    name = "Lipides";
    unit = "g";
  }

  return (
    <div className="flex flex-col bg-[#FBFBFB] xl:mb-[35px] rounded-md overflow-hidden pr-[30px]">
      <div className="nutrient flex p-[20px] xl:p-[32px]">
        <img
          src={`${process.env.PUBLIC_URL}/img/ico-diet/${img}.svg`}
          alt=""
          className="nutrient-img"
        />
        <div className="nutrient-txt ml-[24px]">
          <p className="nutrient-value text-[1.25rem] font-bold ">
            {diet[1]} {unit}
          </p>
          <p className="nutrient-unit text-[0.875rem] text-[#74798C]">{name}</p>
        </div>
      </div>
    </div>
  );
};

Diet.propTypes = {
  diet: PropTypes.array,
};

export default Diet;
