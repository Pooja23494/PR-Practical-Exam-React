import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import RoomList from "./components/RoomList";
import AddRoom from "./components/AddRoom";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/roomlist" element={<RoomList />} />
        <Route path="/reservationform" element={<ReservationForm />} />
        <Route path="/reservationform/:id" element={<ReservationForm />} />
        <Route path="/reservationlist" element={<ReservationList />} />
      </Routes>
    </>
  );
};

export default App;
