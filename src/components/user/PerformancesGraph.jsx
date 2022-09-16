import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const PerformancesGraph = ({ performance, user }) => {
  const subject = performance._arrayPerf;
  console.log(subject);
  return (
    <ResponsiveContainer width="99%" height={260}>
      <RadarChart
        cx={200}
        cy={130}
        outerRadius={80}
        width={260}
        height={260}
        data={performance._arrayPerf}
        fill="#000000"
        style={{ backgroundColor: "#282D30" }}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fontSize: "12px", fill: "white" }}
        />
        <Radar
          name={user._firstName}
          dataKey="value"
          stroke="#FF0101B2"
          fill="rgba(255, 1, 1, 0.7)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformancesGraph;
