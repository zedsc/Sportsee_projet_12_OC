import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import PropTypes from "prop-types";

const ScoreGraph = ({ user }) => {
  const userScore = [
    { name: user._firstName, score: user._score, fill: "#FF0000" },
  ];

  return (
    <ResponsiveContainer
      width="32%"
      height={260}
      className="rounded-md overflow-hidden"
    >
      <RadialBarChart
        width={500}
        height={300}
        cx="50%"
        cy="50%"
        barSize={10}
        data={userScore}
        innerRadius="90%"
        outerRadius="70%"
        startAngle={90}
        endAngle={450}
        style={{ backgroundColor: "#FBFBFB" }}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId="user"
          tick={false}
        />
        <RadialBar
          angleAxisId="user"
          background={{ fill: "#FFFFFF" }}
          dataKey="score"
          cornerRadius={30 / 2}
        />
        <text className="text-[0.938rem]" x="10%" y="18%" fill="#282D30">
          Score
        </text>
        <text
          className="text-[1.5rem] font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          fill="#282D30"
        >
          {`${user._score}`}%
        </text>
        <text
          className="text-[0.875rem]"
          textAnchor="middle"
          x="50%"
          y="58%"
          fill="#74798C"
        >
          de votre
        </text>
        <text
          className="text-[0.875rem]"
          textAnchor="middle"
          x="50%"
          y="65%"
          fill="#74798C"
        >
          objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

ScoreGraph.propTypes = {
  user: PropTypes.object,
};

export default ScoreGraph;
