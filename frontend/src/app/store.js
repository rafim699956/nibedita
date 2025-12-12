import { configureStore } from "@reduxjs/toolkit";
import homeHeroSlice from "../features/homeHero/homeHeroSlice";
import whoWeAreSlice from "../features/whoWeAre/whoWeAreSlice";
import ourConcernSlice from "../features/ourConcern/ourConcernSlice";
export default configureStore({
    reducer: {
        homeHero: homeHeroSlice,
        whoWeAre: whoWeAreSlice,
        ourConcern: ourConcernSlice,
    }
})