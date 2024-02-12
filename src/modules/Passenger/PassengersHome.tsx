import { Outlet } from "react-router-dom";
import PassengerList from "./PassengersList";
import React from "react";

const PassengersHome: React.FC = () => {
  return (
    <>
      <div>
        <h1>Welcome to Passengers Homepage</h1>
        <PassengerList />
      </div>
      <Outlet />
    </>
    
  );
}

export default PassengersHome
