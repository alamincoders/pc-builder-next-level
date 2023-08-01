import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {
    cpu_processor: [],
    motherboard: [],
    ram: [],
    power_supply_unit: [],
    storage_device: [],
    monitor: [],
  },
  pcbuilder: false,
};

const pcbuilderSlice = createSlice({
  name: "pcbuilder",
  initialState,
  reducers: {
    pcbuilder: (state, action) => {
      const { category, product } = action.payload;

      // Check if the product's id is not already present in the category
      if (!state.categories[category].some((item) => item.id === product.id)) {
        const isUniqueProduct = Object.values(state.categories).every((categoryProducts) => categoryProducts.every((item) => item.id !== product.id));

        if (isUniqueProduct) {
          state.categories[category].push(product);
          const allCategoriesSelected = Object.values(state.categories).every((categoryProducts) => categoryProducts.length > 0);
          state.pcbuilder = allCategoriesSelected;
        }
      }
    },
  },
});

export const { pcbuilder } = pcbuilderSlice.actions;

export default pcbuilderSlice.reducer;
