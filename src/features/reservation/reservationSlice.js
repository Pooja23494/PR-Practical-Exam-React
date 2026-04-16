import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const makeReservation = createAsyncThunk(
  "reservation/makeReservation",
  async (reservation, { rejectWithValue }) => {
    try {
      let res = await apiInstance.post("reservation", reservation);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const viewReservation = createAsyncThunk(
  "reservation/viewReservation",
  async (_, { rejectWithValue }) => {
    try {
      let res = await apiInstance.get("reservation");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteReservation = createAsyncThunk(
  "reservation/deleteReservation",
  async (id, { rejectWithValue }) => {
    try {
      let res = await apiInstance.delete(`reservation/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateReservation = createAsyncThunk(
  "reservation/updateReservation",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      let res = await apiInstance.patch(`reservation/${id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservations: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(makeReservation.fulfilled, (state, action) => {
      state.reservations.push(action.payload);
    });
    builder.addCase(viewReservation.fulfilled, (state, action) => {
      state.reservations = action.payload;
    });
    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      state.reservations = state.reservations.filter(
        (val) => val.id != action.payload,
      );
    });
    builder.addCase(updateReservation.fulfilled, (state, action) => {
      state.reservations = state.reservations.map((val) =>
        val.id == action.payload.id ? action.payload : val,
      );
    });
  },
});

export default reservationSlice.reducer;
