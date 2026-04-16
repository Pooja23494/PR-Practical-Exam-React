import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRooms } from "../features/room/roomSlice";

const RoomList = () => {
  const { rooms, search } = useSelector((state) => state.room);
  const dispatch = useDispatch();

  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    dispatch(viewRooms());
  }, [dispatch]);

  let filteredRooms = rooms.filter(
    (room) =>
      room.type.toLowerCase().includes(search.toLowerCase())
  );

  if (filterType) {
    filteredRooms = filteredRooms.filter((room) => room.type === filterType);
  }

  if (filterStatus) {
    filteredRooms = filteredRooms.filter(
      (room) => room.status === filterStatus,
    );
  }

  if (sortType === "low") {
    filteredRooms = [...filteredRooms].sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    filteredRooms = [...filteredRooms].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Rooms Details</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <select
            className="form-select"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Filter by Room Type</option>
            <option value="single-room">Single-Room</option>
            <option value="delux">Delux</option>
            <option value="ac">AC</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Filter by Status</option>
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filteredRooms.length === 0 ? (
          <p className="text-center text-muted">No rooms found</p>
        ) : (
          filteredRooms.map((room) => (
            <div className="col-md-4 mb-4" key={room.id}>
              <div className="card shadow h-100">
                <img
                  src={room.image}
                  className="card-img-top"
                  alt="Room"
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title text-capitalize">{room.type}</h5>

                  <p className="card-text">
                    <strong>Price:</strong> ₹{room.price} / Per Night
                  </p>

                  <span
                    className={`badge p-2 text-capitalize ${
                      room.status === "available" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {room.status}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomList;
