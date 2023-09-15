import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";
import songsReducer from './features/songsSlice';
import favoritesReducer from "./features/favoritesSlice";
import modalReducer from "./features/modalSlice"
import userReducer from "./features/userSlice";
import storage from './utils/storage';

const persistConfig = {
    key: 'favorites',
    storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
    reducer: {
        user: userReducer,
        songs: songsReducer,
        favorites: persistedReducer,
        modal: modalReducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
