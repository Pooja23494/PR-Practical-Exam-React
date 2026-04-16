import { configureStore } from "@reduxjs/toolkit";
import roomReducer from '../features/room/roomSlice';
import reservationReducer from '../features/reservation/reservationSlice'

const store = configureStore({
  reducer: {
    room: roomReducer,
    reservation: reservationReducer,
  },
});


export default store;