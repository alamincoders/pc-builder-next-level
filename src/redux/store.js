import { configureStore } from "@reduxjs/toolkit";
import pcbuilderSlice from "./features/pcBuilderSlice.js";

const store = configureStore({
  reducer: {
    pcbuilder: pcbuilderSlice,
  },
});

export default store;
