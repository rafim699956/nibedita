import { createSlice } from "@reduxjs/toolkit";
import heroBanner1 from "../../assets/images/herobanner1.png";
import heroBanner2 from "../../assets/images/heroBanner2.png";
import heroBanner3 from "../../assets/images/heroBanner3.png";
import heroBanner4 from "../../assets/images/heroBanner4.png";
import heroBanner5 from "../../assets/images/heroBanner5.png";
const initialState = [
    {
        id: 1,
        title: "Taking care of every step of life: from health to nutrition",
        description:
            "CWFD Nibedita is dedicated to the well being of the society it is serving. Our concerns sphere around mother and child health, mental health care, physiotherapy and good food habits.",
        path: "/health-care",
        bgColor: "#9D5DA3",
        featuredImg: heroBanner1,
    },
    {
        id: 2,
        title: "Saleha Khanam Nibedita Maternal and Child Health Clinic",
        description:
            "To build the foundation of a society, our clinic offers medical services to mothers and their newborn child. We believe that the root of a healthy and sound society relies on a healthy mother and child.",
        path: "/health-care",
        bgColor: "#9D5DA3",
        featuredImg: heroBanner2,
    },
    {
        id: 3,
        title: "Nibedita Mental Health Centre",
        description:
            "On our mission to establish a society where mental wellness is appropriately understood, properly valued and has accessibility to affordable care. We are on a path to revolutionize society's belief on mental health care.",
        path: "/health-care",
        bgColor: "#1DA783",
        featuredImg: heroBanner3,
    },
    {
        id: 4,
        title: "Nibedita Physiotherapy",
        description:
            "Our physiotherapy centre provides the most advanced physiotherapy services. So that patients don’t have to worry about going abroad. Our aim is to deliver an international standard of physiotherapy care.",
        path: "/health-care",
        bgColor: "#5D499D",
        featuredImg: heroBanner4,
    },
    {
        id: 5,
        title: "Nibedita Canteen",
        description:
            "Nibedita canteen was established with the concern of providing food lovers with tasty and quality food. In this market of unhygienic food service, we stand firm to serve the society with foods that they can enjoy without any doubt.",
        path: "/health-care",
        bgColor: "#C52B27",
        featuredImg: heroBanner5,
    },
];
export const homeHeroSlice = createSlice({
    name: "homeHero",
    initialState,
    reducers: {},
});

export default homeHeroSlice.reducer;
