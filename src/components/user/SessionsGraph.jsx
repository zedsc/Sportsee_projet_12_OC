import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import FetchData from "../../utils/hooks/FetchData";
import SessionUserData from "../../utils/models/SessionUserData";
import ErrorMsg from "../ErrorMsg";
import Loader from "../Loader";
import PropTypes from "prop-types";
import mockData from "../../utils/ManageApi";

const SessionHover = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y={0}
      width="100%"
      height="100%"
      fill="rgba(0, 0, 0, 0.2)"
    />
  );
};

const SessionTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="session-tooltip">
        <p
          className="session-data bg-white
        text-[10px] p-2 text-center "
        >
          {`${payload[0].value}`} min
        </p>
      </div>
    );
  } else {
    return (payload = []);
  }
};

const SessionsGraph = ({ userId }) => {
  const { data, dataLoaded, error } = FetchData(
    mockData
      ? `/user/${userId}/sessions.json`
      : `http://localhost:3001/user/${userId}/average-sessions`,
    SessionUserData
  );

  const sessionData = data;
  if (error) {
    return <ErrorMsg />;
  }

  return dataLoaded ? (
    <ResponsiveContainer
      width="32%"
      height={260}
      className="rounded-md overflow-hidden"
    >
      <LineChart
        data={sessionData._sessions}
        margin={{
          top: 100,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        style={{ backgroundColor: "#FF0000" }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          style={{ fill: "white" }}
          tickMargin={1}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          hide={true}
          domain={[0, "dataMax+10"]}
        />

        <Tooltip
          wrapperStyle={{ outline: "none" }}
          cursor={<SessionHover />}
          content={<SessionTooltip />}
        />
        <Line
          dataKey="sessionLength"
          yAxisId="right"
          type="monotone"
          stroke="#FFFFFF"
          strokeWidth={2}
          activeDot={{ r: 5 }}
          dot={false}
        />
        <text
          className="text-[0.938rem]"
          x="10%"
          y="16%"
          fill="rgba(255, 255, 255, 0.6)"
        >
          Durée moyenne des
        </text>
        <text
          className="text-[0.938rem]"
          x="10%"
          y="24%"
          fill="rgba(255, 255, 255, 0.6)"
        >
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  ) : (
    <Loader />
  );
};

SessionsGraph.propTypes = {
  userId: PropTypes.number,
};

export default SessionsGraph;
