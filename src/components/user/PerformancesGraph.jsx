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
import ErrorMsg from "../ErrorMsg";
import Loader from "../Loader";
import PropTypes from "prop-types";
import mockData from "../../utils/ManageApi";

/**
 *  @returns the radarchart component.
 */
const PerformancesGraph = ({ userId, user }) => {
  const { data, dataLoaded, error } = FetchData(
    mockData
      ? `/user/${userId}/performance.json`
      : `http://localhost:3001/user/${userId}/performance`,
    PerfUserData
  );

  const perfData = data;
  if (error) {
    return <ErrorMsg />;
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
        outerRadius={80}
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

PerformancesGraph.propTypes = {
  userId: PropTypes.number,
  user: PropTypes.object,
};

export default PerformancesGraph;
