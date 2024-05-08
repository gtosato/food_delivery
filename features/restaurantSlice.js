import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	restaurant: {
		id: null,
		imgUrl: null,
		title: null,
		rating: null,
		genre: null,
		address: null,
		short_description: null,
		dishes: null,
	},
};

export const restaurantSlice = createSlice({
	name: "restaurant",
	initialState,
	reducers: {},
});

export const { addToBasket, removeFromBasket } = restaurantSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
	state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
	state.basket.items.reduce((total, item) => (total += item.price), 0);

export default restaurantSlice.reducer;
