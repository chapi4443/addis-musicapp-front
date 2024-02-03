import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputData: [],
  UpdateData: [],
  deleteData: [],
  StaticsData: [],
};

const MusicUp = createSlice({
  name: "music",
  initialState: initialState,

  reducers: {
    MusicInput(state, actions) {
      const newData = actions.payload;
      state.InputData.push({
        genre: newData.genre,
        title: newData.title,
        artist_name: newData.artist_name,
        album_name: newData.album_name,
      });

    },
    MusicUpdate(state, actions) {
      const putData = actions.payload;
      state.UpdateData.push({
        id: putData.id,
        genre: putData.genre,
        title: putData.title,
        artist_name: putData.artist_name,
        album_name: putData.album_name,
      });
    },
    MusicDelete(state, actions) {
      const id = actions.payload;
      state.deleteData.push({
        id: id.id,
      });
    },
    MusicGet(state) {},
    MusicPut(state, action) {
      state.InputData = action.payload;
    },
    StaticsGet(state) {},
    StaticsPut(state, action) {
      state.StaticsData = action.payload;
    },
  },
});

export default MusicUp.reducer;
export const {
  MusicInput,
  MusicUpdate,
  MusicDelete,
  MusicGet,
  MusicPut,
  StaticsPut,
  StaticsGet,
} = MusicUp.actions;
