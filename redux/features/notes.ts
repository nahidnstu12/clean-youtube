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
    // deletenotePlaylist: (state: any, action: any) => {
    //   state.data = state.data.filter((list: any) => list !== action.payload);
    // },
    addNotePlaylist: (state: any, action: any) => {
      if (state.data.indexOf(action.payload) !== -1) {
        return;
      }
      // @ts-ignore
      state.data?.[action.payload.playlistId][action.payload.videoId] =
        action.payload.note;
    },
  },
});

export const { addNotePlaylist } = noteSlice.actions;
export default noteSlice.reducer;
