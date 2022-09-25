import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-wrapper mx-auto h-[100%]">
      <Header />
      <div className="wrapper-main-aside flex">
        <Aside />
        <main className="w-[100%]">
          <h1 className="pick-user text-2xl mx-auto mt-[80px] w-[300px]">
            Choisissez un utilisateur :
          </h1>
          <div className="user-select flex mt-[100px] justify-center">
            <NavLink to="/dashboard" state={18}>
              <div className="user card w-[400px] h-[420px] mx-[40px] shadow-[0_2px_6px_0_rgba(0,0,0,0.35)] rounded-lg overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/img/persona_f.jpg`}
                  alt="Utilisateur 1"
                  className="user object-cover"
                />
              </div>
            </NavLink>
            <NavLink to="/dashboard" state={12}>
              <div className="user card w-[400px] h-[420px] mx-[40px] shadow-[0_2px_6px_0_rgba(0,0,0,0.35)] rounded-lg overflow-hidden">
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
