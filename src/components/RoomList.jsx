import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRooms } from "../features/room/roomSlice";

const RoomList = () => {
  const { rooms } = useSelector((state) => state.room);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewRooms());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Rooms Details</h2>

      <div className="row">
        {rooms.map((room) => (
          <div className="col-md-4 mb-4" key={room.id}>
            <div className="card shadow h-100">
              <img
                src={room.image}
                className="card-img-top"
                alt="Room"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{room.type}</h5>
                <p className="card-text">
                  <strong>Price:</strong> ₹{room.price} / Per Night
                </p>
                <span className="badge bg-danger">{room.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
