import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import FetchData from "../../utils/hooks/FetchData";
import ActivityUserData from "../../utils/models/ActivityUserData";
import ErrorMsg from "../ErrorMsg";
import Loader from "../Loader";
import PropTypes from "prop-types";
import mockData from "../../utils/ManageApi";

/**
 * Custom barchart tooltip
 */
const ActivityTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="activity-tooltip outline-none">
        <p className="activity-data text-white bg-[#E60000] text-[12px] p-4 text-center">
          {`${payload[0].value}`}kg
        </p>
        <p className="activity-data text-white bg-[#E60000] text-[12px] p-4 text-center">
          {`${payload[1].value}`}kCal
        </p>
      </div>
    );
  } else {
    return (payload = []);
  }
};

/**
 *  @returns the barchart component.
 */
const ActivityGraph = ({ userId }) => {
  const { data, dataLoaded, error } = FetchData(
    mockData
      ? `/user/${userId}/activity.json`
      : `http://localhost:3001/user/${userId}/activity`,
    ActivityUserData
  );

  const activityData = data;
  if (error) {
    return <ErrorMsg />;
  }

  return dataLoaded ? (
    <ResponsiveContainer
      width="99%"
      height={320}
      className="rounded-md overflow-hidden"
    >
      <BarChart
        width={800}
        height={300}
        data={activityData._activity}
        margin={{
          top: 60,
          right: 10,
          left: 0,
          bottom: 30,
        }}
        barSize={8}
        barGap={10}
        barCategoryGap={15}
        style={{ backgroundColor: "#FBFBFB" }}
      >
        <CartesianGrid strokeDasharray="4 1 2" vertical={false} />
        <XAxis dataKey="day" tickMargin={16} />
        <YAxis
          yAxisId="left"
          dataKey="kcal"
          domain={[0, "dataMax"]}
          hide={true}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          dataKey="kg"
          type="number"
          domain={["dataMin-1", "dataMax+1"]}
          allowDecimals={false}
          axisLine={false}
          tickLine={false}
          tick={{ transform: "translate(20, 0)" }}
        />
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={<ActivityTooltip />}
        />
        <Legend
          align="right"
          verticalAlign="top"
          iconType={"circle"}
          iconSize={8}
          wrapperStyle={{ top: 25, right: 26 }}
          formatter={(value) => {
            return (
              <span style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>
                {value}
              </span>
            );
          }}
        />
        <Bar
          yAxisId="right"
          dataKey="kg"
          name="Poids (kg)"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="kcal"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
        />
        <text className="text-[0.938rem]" x="5%" y="14%" fill="#20253A">
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <Loader />
  );
};

ActivityGraph.propTypes = {
  userId: PropTypes.number,
};

export default ActivityGraph;
