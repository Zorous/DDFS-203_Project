import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "./album.json";
const albumSlice = createSlice({
  name: "album",
  initialState: data,
  reducers: {
    AddAlbum: (State, Action) => {
      const newTask = {
        userId: Action.payload.UserId,
        id: Action.payload.Id,
        title: Action.payload.Title,
      };
      State.push(newTask);
    },
    DeleteAlbum: (State, Action) => {
      State = State.filter((t) => t.id !== Action.payload);
      return State;
    },
  },
});

export const store = configureStore({
  reducer: {
    album: albumSlice.reducer,
  },
});

export const { AddAlbum, DeleteAlbum } = albumSlice.actions;
