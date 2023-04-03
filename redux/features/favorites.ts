import { createSlice } from "@reduxjs/toolkit";

interface IState {
    items:  [];
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

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        deleteFavoritePlaylist: (state: any, action: any) => {
        state.items = state.items.filter((list:any)=> list !== action.payload)
      },
      addFavoritePlaylist: (state:any, action:any)=>{
        if(state.items.indexOf(action.payload) !== -1){
            return;
        }
        state.items.push(action.payload)
      }
    }
})

export const { deleteFavoritePlaylist, addFavoritePlaylist } = favoriteSlice.actions;
export default favoriteSlice.reducer;