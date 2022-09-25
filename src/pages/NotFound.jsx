import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <div className="main-wrapper mx-auto h-[100%] w-[100%]">
      <Header />
      <div className="wrapper-main-aside flex w-[100%] h-[100%]">
        <Aside />
        <main className="w-[100%]">
          <div className="ml-[auto] mr-[auto] mt-[15%] text-center text-xl">
            <h1>Erreur 404 🥶 </h1>
            <h2>Oups ! La page que vous demandez n'existe pas.</h2>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
