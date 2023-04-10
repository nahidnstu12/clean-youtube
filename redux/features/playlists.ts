import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlaylist } from "../../services/api";

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

// Async thunk
export const fetchPlaylist = createAsyncThunk(
  "playlist/fetchPlaylist",
  async (playlistId: string, { getState }) => {
    const state = getState();

    try {
      // @ts-ignore
      if (state.playlists.data[playlistId]) {
        return;
      }
      return await getPlaylist(playlistId);
    } catch (err) {
      console.log("thunk", err);
      // @ts-ignore
      // return rejectWithValue(err?.response?.data?.error?.message);
    }
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    deletePlaylist: (state: any, action: any) => {
      delete state.data[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPlaylist.fulfilled, (state: IState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = "";
        // @ts-ignore
        state.data[action.payload.playlistId] = action.payload;
      })
      .addCase(fetchPlaylist.rejected, (state: IState, action: any) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error =
          action?.error?.response?.data?.error?.message ||
          action?.error?.message ||
          "Something went wrong!!!!!";
      });
  },
});

export const { deletePlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
