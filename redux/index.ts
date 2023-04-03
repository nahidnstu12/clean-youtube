// @ts-ignore
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import playlistReducer from "./features/playlists";
import favoriteReducer from "./features/favorites";
import recentReducer from "./features/recents";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  playlists: playlistReducer,
  // videos: videosReducer,
  favorites: favoriteReducer,
  recent: recentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
