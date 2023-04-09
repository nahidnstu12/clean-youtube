import { createSlice } from "@reduxjs/toolkit";

interface IState {
  data: {};
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
}
const initialState: IState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    deleteNoteFromPlaylist: (state: any, action: any) => {
      let playlistId = action.payload.playlistId;
      let videoId = action.payload.videoId;
      if (action.payload.noteIndex >= 0) {
        state.data[playlistId][videoId]?.splice(action.payload.noteIndex, 1);
      }
    },
    addNotePlaylist: (state: any, action: any) => {
      let playlistId = action.payload.playlistId;
      let videoId = action.payload.videoId;

      console.log({ playlistId, videoId });

      if (state.data[playlistId]) {
        if (state.data[playlistId][videoId]) {
          state.data[playlistId][videoId] = [
            action.payload.note,
            ...state.data[playlistId][videoId],
          ];
        } else {
          state.data[playlistId][videoId] = [action.payload.note];
        }
      } else {
        state.data[playlistId] = {};
        state.data[playlistId][videoId] = [action.payload.note];
      }
      // state.data = {};
    },
  },
});

export const { addNotePlaylist, deleteNoteFromPlaylist } = noteSlice.actions;
export default noteSlice.reducer;
