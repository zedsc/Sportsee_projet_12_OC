import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import FetchData from "../../utils/hooks/FetchData";
import PerfUserData from "../../utils/models/PerfUserData";
import Loader from "../Loader";

const PerformancesGraph = ({ userId, user }) => {
  const { data, dataLoaded, error } = FetchData(
    `http://localhost:3001/user/${userId}/performance`,
    PerfUserData
  );

  const perfData = data;
  if (error) {
    return (
      <div className="error-api text-center mt-[10%] bg-[#FBFBFB]">
        Oups, il y a eu un problème. Service indisponible ❌
      </div>
    );
  }

  return dataLoaded ? (
    <ResponsiveContainer
      width="33%"
      height={260}
      className="rounded-md overflow-hidden"
    >
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={90}
        width={260}
        height={260}
        data={perfData._arrayPerf}
        fill="#000000"
        style={{ backgroundColor: "#282D30" }}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fontSize: "0.75rem", fill: "white" }}
        />
        <Radar
          name={user._firstName}
          dataKey="value"
          stroke="#FF0101B2"
          fill="rgba(255, 1, 1, 0.9)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  ) : (
    <Loader />
  );
};

export default PerformancesGraph;
