import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { NavLink } from "react-router-dom";

const Home = () => {
  ////Test de data
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/user/12.json").then((result) => setData(result.data));
  }, []);

  console.log(data, "datas");

  return (
    <div className="main-wrapper mx-auto">
      <Header />
      <div className="wrapper-main-aside flex">
        <Aside />
        <main className="w-[100%]">
          <div className="user-select flex mt-[150px] justify-center">
            <NavLink to="/dashboard">
              <div className="user card w-[400px] h-[420px] mx-[40px] shadow-[0_4px_4px_0_rgba(0,0,0,0.35)] rounded-lg overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/img/persona_f.jpg`}
                  alt="Utilisateur 1"
                  className="user object-cover"
                />
              </div>
            </NavLink>
            <NavLink to="/dashboard">
              <div className="user card w-[400px] h-[420px] mx-[40px] shadow-[0_4px_4px_0_rgba(0,0,0,0.35)] rounded-lg overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/img/persona_m.jpg`}
                  alt="Utilisateur 2"
                  className="user object-cover"
                />
              </div>
            </NavLink>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
