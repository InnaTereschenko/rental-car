import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    redusers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            const updatedFavorites = state.favorites.filter(
                item => item.id !== action.payload.id
            );
            state.favorites = updatedFavorites;
        },
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;