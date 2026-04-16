import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeReservation,
  updateReservation,
  viewReservation,
} from "../features/reservation/reservationSlice";
import { useParams, useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const { reservations } = useSelector((state) => state.reservation);
  const { rooms } = useSelector((state) => state.room);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewReservation());
  }, []);

  useEffect(() => {
    if (param.id && reservations?.length > 0) {
      const existingData = reservations.find(
        (res) => res.id === parseInt(param.id),
      );

      if (existingData) {
        setFormData(existingData);
      }
    }
  }, [param.id, reservations]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "roomId" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (param.id) {
      dispatch(
        updateReservation({
          id: parseInt(param.id),
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
              {param.id ? "Edit Reservation" : "Book Room"}
            </h2>
            <div className="mb-3">
              <label className="form-label">Guest Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name||''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Select Room</label>
              <select
                name="roomId"
                className="form-select"
                value={formData.roomId}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Room --</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} ({room.type})
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
                value={formData.checkIn||''}
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
                value={formData.checkOut||''}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn-primary w-100">
              {param.id ? "Update Reservation" : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
