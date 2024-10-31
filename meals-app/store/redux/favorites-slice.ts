import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteType {
  favorites: string[];
  // addFavorite: (id: string) => void;
  // removeFavorite: (id: string) => void;
}

const initialState: FavoriteType = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      //   setFavorites((prev) => prev.filter((favoriteId) => favoriteId !== id));
      // state.favorites = state.favorites.filter(
      //   (favoriteID) => favoriteID !== action.payload
      // );
      state.favorites.splice(state.favorites.indexOf(action.payload), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
