import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteReservation,
  viewReservation,
} from "../features/reservation/reservationSlice";
import { useNavigate } from "react-router-dom";

const ReservationList = () => {
  const { reservations } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewReservation());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };

  const handleEdit = (id) => {
    navigate(`/reservationform/${id}`);
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Reservation List</h2>

      {reservations.length === 0 ? (
        <p className="text-center text-muted">No reservations found</p>
      ) : (
        <table className="table table-bordered table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Guest Name</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((res, index) => (
              <tr key={res.id}>
                <td>{index + 1}</td>
                <td>{res.name}</td>
                <td>{res.checkIn}</td>
                <td>{res.checkOut}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={() => handleDelete(res.id)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleEdit(res.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservationList;
