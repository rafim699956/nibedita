import { configureStore } from "@reduxjs/toolkit";
import homeHeroSlice from "../features/homeHero/homeHeroSlice";
export default configureStore({
    reducer: {
        homeHero: homeHeroSlice
    }
})