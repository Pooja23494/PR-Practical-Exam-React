import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteReservation,
  viewReservation,
} from "../features/reservation/reservationSlice";
import { viewRooms } from "../features/room/roomSlice";
import { useNavigate } from "react-router-dom";

const ReservationList = () => {
  const { reservations,search } = useSelector((state) => state.reservation);
  const { rooms } = useSelector((state) => state.room);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewReservation());
    dispatch(viewRooms()); 
  }, [dispatch]);

  const filteredReservations = reservations.filter((res) =>
    res.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };

  const handleEdit = (id) => {
    navigate(`/reservationform/${id}`);
  };

  const getRoomDetails = (roomId) => {
    return rooms.find((room) => String(room.id) === String(roomId));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Reservation List</h2>

      {filteredReservations.length === 0 ? (
        <p className="text-center text-muted">No reservations found</p>
      ) : (
        <table className="table table-bordered table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Guest Name</th>
              <th>Room Type</th> 
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredReservations.map((res, index) => {
              const room = getRoomDetails(res.roomId);
              return (
                <tr key={res.id}>
                  <td>{index + 1}</td>
                  <td>{res.name}</td>
                  <td className="text-capitalize">{room ? room.type : "N/A"}</td>
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
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservationList;
