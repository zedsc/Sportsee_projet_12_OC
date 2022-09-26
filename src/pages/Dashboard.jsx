import React from "react";
import { useLocation } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Diet from "../components/user/Diet";
import Name from "../components/user/Name";
import PerformancesGraph from "../components/user/PerformancesGraph";
import ActivityGraph from "../components/user/ActivityGraph";
import SessionsGraph from "../components/user/SessionsGraph";
import FetchData from "../utils/hooks/FetchData";
import ScoreGraph from "../components/user/ScoreGraph";
import ErrorMsg from "../components/ErrorMsg";
import MainUserData from "../utils/models/MainUserData";
import mockData from "../utils/ManageApi";

const Dashboard = () => {
  const location = useLocation();
  const userId = location.state;

  const { data, dataLoaded, error } = FetchData(
    mockData ? `/user/${userId}.json` : `http://localhost:3001/user/${userId}`,
    MainUserData
  );

  const mainData = data;
  if (error) {
    return (
      <div className="main-wrapper mx-auto h-[100%]">
        <Header />
        <div className="wrapper-main-aside flex  h-[100%]">
          <Aside />
          <main className="w-[100%] ml-[100px]">
            <ErrorMsg />
          </main>
        </div>
      </div>
    );
  }

  return dataLoaded ? (
    <div className="main-wrapper mx-auto h-[100%]">
      <Header />
      <div className="wrapper-main-aside flex  h-[100%]">
        <Aside />
        <main className="w-[100%] ml-[50px] xl:ml-[100px]">
          <Name user={mainData} />
          <section className="stats xl:flex justify-between">
            <h3 className="sr-only">Statistiques</h3>
            <div className="charts xl:w-[70%]">
              <ActivityGraph userId={userId} />
              <div className="sess-perf-charts flex w-[100%] justify-around mt-[28px]">
                <SessionsGraph userId={userId} />
                <PerformancesGraph userId={userId} user={mainData} />
                <ScoreGraph user={mainData} />
              </div>
            </div>
            <div className="nutrients flex justify-between mr-[5%] xl:flex-col xl:ml-[4%] xl:mr-[8%] xl:w-[30%] mt-[20px] xl:mt-[0px]">
              {Object.entries(mainData.keyData).map((nutrient) => (
                <Diet key={mainData.id + "-" + nutrient} diet={nutrient} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Dashboard;
