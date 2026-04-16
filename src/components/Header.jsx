import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/room/roomSlice";
import { setReservationSearch } from "../features/reservation/reservationSlice";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchData(value);
    dispatch(setSearch(value));
    dispatch(setReservationSearch(value)); 
  };

  const handleLogout=()=>{
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/roomlist">
          🏨 Sky View
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/addroom">
                Add Room
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/roomlist">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservationform">
                Book Room
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservationList">
                Reservations
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search rooms..."
              value={searchData}
              onChange={handleChange}
            />
            <button
              className="btn btn-light ms-3"
              type="button"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
