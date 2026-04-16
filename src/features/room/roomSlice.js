import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const addRoom = createAsyncThunk(
  "room/addRoom",
  async (room, { rejectWithValue }) => {
    try {
      let res = await apiInstance.post("rooms", room);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const viewRooms = createAsyncThunk(
  "room/viewRooms",
  async (_, { rejectWithValue }) => {
    try {
      let res = await apiInstance.get("rooms");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const roomSlice = createSlice({
  name: "room",
  initialState: {
    rooms: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addRoom.fulfilled, (state, action) => {
      state.rooms.push(action.payload);
    });
    builder.addCase(viewRooms.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
  },
});

export default roomSlice.reducer;
