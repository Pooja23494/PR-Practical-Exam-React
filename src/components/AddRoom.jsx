import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRoom } from "../features/room/roomSlice";

const AddRoom = () => {
  const [room, setRoom] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Room Added Successfully!");
    dispatch(addRoom(room));
    setRoom({});
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 mt-5">
            <h2 className="text-center">Add Room</h2>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                id="image"
                value={room.image||''}
                onChange={handleChange}
                className="form-control rounded-pill"
                placeholder="Enter Room Image URL"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <select
                name="type"
                id="type"
                value={room.type||''}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">--select room type--</option>
                <option value="delux">Delux</option>
                <option value="single-room">Single Room</option>
                <option value="double-room">Double Room</option>
                <option value="ac">AC Room</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={room.price||''}
                onChange={handleChange}
                className="form-control rounded-pill"
                placeholder="Enter Room Price"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                name="status"
                id="status"
                value={room.status||''}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">--Select Status--</option>
                <option value="available">Available</option>
                <option value="booked">Booked</option>
              </select>
            </div>
            <button className="btn btn-dark w-100 rounded-pill">
              Add Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
