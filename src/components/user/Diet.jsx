import React from "react";

const Diet = ({ diet }) => {
  let img, unit, name;

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
    <div className="flex flex-col bg-[#FBFBFB] mb-[35px]">
      <div className="nutrient flex p-[32px]">
        <img
          src={`${process.env.PUBLIC_URL}/img/ico-diet/${img}.svg`}
          alt=""
          className="nutrient-img"
        />
        <div className="nutrient-txt ml-[24px]">
          <p className="nutrient-value text-[20px] font-bold">
            {diet[1]} {unit}
          </p>
          <p className="nutrient-unit text-[14px] text-[#74798C]">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Diet;
