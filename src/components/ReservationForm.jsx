import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeReservation,
  updateReservation,
  viewReservation,
} from "../features/reservation/reservationSlice";
import { useParams, useNavigate } from "react-router-dom";
import { viewRooms } from "../features/room/roomSlice";

const ReservationForm = () => {
  const { reservations } = useSelector((state) => state.reservation);
  const { rooms } = useSelector((state) => state.room);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewReservation());
    dispatch(viewRooms());
  }, []);

  useEffect(() => {
    if (id) {
      const existingBooking = reservations.find((r) => r.id == id);
      if (existingBooking) {
        setFormData(existingBooking);
      }
      else{
        setFormData({});
      }
    }
  }, [id, reservations]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(
        updateReservation({
          id,
          data: formData,
        }),
      );
    } else {
      dispatch(makeReservation(formData));
    }
    navigate("/reservationlist");
    setFormData({});
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 mt-5 shadow">
            <h2 className="text-center mb-4">
              {id ? "Edit Reservation" : "Book Room"}
            </h2>
            <div className="mb-3">
              <label className="form-label">Guest Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Enter Guest Name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Select Room</label>
              <select
                name="roomId"
                className="form-select"
                value={formData.roomId||''}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Room --</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.id} className=" text-capitalize">
                    {room.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Check-In</label>
              <input
                type="date"
                name="checkIn"
                className="form-control"
                value={formData.checkIn || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Check-Out</label>
              <input
                type="date"
                name="checkOut"
                className="form-control"
                value={formData.checkOut || ""}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn-dark w-100">
              {id ? "Update Reservation" : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
