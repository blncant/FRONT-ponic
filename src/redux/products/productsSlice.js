import { createSlice } from "@reduxjs/toolkit";
import { Products, TotalProducts } from "../../data/ProductsData";

const initialState = {
	products: Products,
	totalProducts: TotalProducts,
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		getProducts: (state) => state,
	},
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
