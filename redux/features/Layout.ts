import { createSlice } from "@reduxjs/toolkit";
import { LAYOUT } from "../../services/utils/enums";

interface IState {
  data: {};
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
}
const initialState: IState = {
  data: {
    [LAYOUT.SIDEBAR]: true,
    [LAYOUT.DESCRIPTION]: true,
    [LAYOUT.NOTES]: true,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    // deleteLayoutPlaylist: (state: any, action: any) => {
    //     state.items = state.items.filter((list:any)=> list !== action.payload)
    // },
    // addLayoutPlaylist: (state:any, action:any)=>{
    //     if(state.items.indexOf(action.payload) !== -1){
    //         return;
    //     }
    //     state.items.push(action.payload)
    // }
    changeLayout: (state: any, action: any) => {},
    toggleLayoutSidebar: (state: any, action: any) => {
      state.data[LAYOUT.SIDEBAR] = action.payload;
    },
    toggleLayoutDescription: (state: any, action: any) => {
      state.data[LAYOUT.DESCRIPTION] = action.payload;
    },
    toggleLayoutNotes: (state: any, action: any) => {
      state.data[LAYOUT.NOTES] = action.payload;
    },
  },
});

export const {
  toggleLayoutSidebar,
  toggleLayoutDescription,
  toggleLayoutNotes,
} = layoutSlice.actions;
export default layoutSlice.reducer;
