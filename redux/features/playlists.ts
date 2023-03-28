import { createSlice } from "@reduxjs/toolkit";

export const playlistsSlice = createSlice({
    name: 'playlists',
    initialState: [],
    reducers: {
        addPlaylist: (state, action) => {
            // const todo = {
            //     id: uuid(),
            //     text: action.payload,
            // };
            //
            // state.push(todo);
        },
    });

