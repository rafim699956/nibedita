import { createSlice } from "@reduxjs/toolkit";
import teamMember1 from "../../assets/images/teamMember1.png";
import teamMember2 from "../../assets/images/teamMember2.png";
import teamMember3 from "../../assets/images/teamMember3.png";
import teamMember4 from "../../assets/images/teamMember4.png";
const initialState = {
    sectionTitle: "Our team members",
    sectionDes:
        "We take pride in our team of highly accomplished professionals from diverse sectors, all committed to making a meaningful impact through their skills and passion.",
    teamMembers: [
        {
            id: 1,
            memberName: "Dr. Zeenat Sultana",
            jobtitle: "Program Director & DCEO",
            img: teamMember1,
        },
        {
            id: 2,
            memberName: "Dr. Nafisa Lira Huq",
            jobtitle: "Adjunct Faculty",
            img: teamMember2,
        },
        {
            id: 3,
            memberName: "Dr Rita Sen, PhD",
            jobtitle: "Head, Research and Documentation",
            img: teamMember3,
        },
        {
            id: 4,
            memberName: "Shamima Sultana",
            jobtitle: "Head, Research and Documentation",
            img: teamMember4,
        },
    ],
};

export const ourTeamMemberSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
});

export default ourTeamMemberSlice.reducer;
