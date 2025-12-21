import { configureStore } from "@reduxjs/toolkit";
import homeHeroSlice from "../features/homeHero/homeHeroSlice";
import whoWeAreSlice from "../features/whoWeAre/whoWeAreSlice";
import ourConcernSlice from "../features/ourConcern/ourConcernSlice";
import ourTeamMemberSlice from "../features/ourTeamMember/ourTeamMemberSlice";
import latestNewsSlice from "../features/latestNews/latestNewsSlice";
import ourCareJourneySlice from "../features/ourCareJourney/ourCareJourneySlice"
import contactUsSlice from "../features/contactusSection/contactusSlice"
export default configureStore({
    reducer: {
        homeHero: homeHeroSlice,
        whoWeAre: whoWeAreSlice,
        ourConcern: ourConcernSlice,
        ourTeamMember: ourTeamMemberSlice,
        latestNews: latestNewsSlice,
        ourJourney: ourCareJourneySlice,
        contactus: contactUsSlice,
    }
})