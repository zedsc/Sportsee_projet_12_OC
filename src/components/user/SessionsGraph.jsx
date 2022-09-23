import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Text,
  ResponsiveContainer,
} from "recharts";
import FetchData from "../../utils/hooks/FetchData";
import SessionUserData from "../../utils/models/SessionUserData";
import ErrorMsg from "../ErrorMsg";
import Loader from "../Loader";
import dataMocked from "../../utils/ManageApi";

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
    dataMocked
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
        <Text fill="#FFFFFF" textAnchor="start" verticalAnchor="start">
          Durée moyenne des sessions
        </Text>
        <Line
          dataKey="sessionLength"
          yAxisId="right"
          type="monotone"
          stroke="#FFFFFF"
          strokeWidth={2}
          activeDot={{ r: 5 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  ) : (
    <Loader />
  );
};

export default SessionsGraph;
