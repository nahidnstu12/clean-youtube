import { createSlice } from "@reduxjs/toolkit";

interface IState {
  items: [];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
}
const initialState: IState = {
  items: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    deleteRecentPlaylist: (state: any, action: any) => {
      delete state.items[action.payload];
    },
    addRecentPlaylist: (state: any, action: any) => {
      if (state.items.indexOf(action.payload) !== -1) {
        return;
      }
      state.items.unshift(action.payload);

      if (state.items.length > 5) {
        state.items.splice(5, state.items.length);
      }
    },
  },
});

export const { deleteRecentPlaylist, addRecentPlaylist } = recentSlice.actions;
export default recentSlice.reducer;
