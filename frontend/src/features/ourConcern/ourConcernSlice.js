import { createSlice } from "@reduxjs/toolkit";
import blogImg1 from "../../assets/images/blogimg1.png";
import blogImg2 from "../../assets/images/blogimg2.png";
import blogImg3 from "../../assets/images/blogimg3.png";
import blogImg4 from "../../assets/images/blogimg4.png";

const initialState = {
    sectionTitle: "Our concerns",
    sectionDes: "At Nibedita, we empower communities with essential healthcare services, including maternal care, mental wellness, nutrition, and physiotherapy, enhancing overall well-being.",
    blogPosts: [
        {
            id: 1,
            title: "Saleha Khanam Maternal and Child Health Center",
            des: "We offer complete healthcare services, focusing on maternal, child, and general patient care. Our facility has got experienced doctors and modern machinery. The goal is to ensure accessible, affordable healthcare while promoting preventive health practices for lasting well-being.",
            img: blogImg1
        },
        {
            id: 2,
            title: "Nibedita Mental Health Centre",
            des: "The Mental Health Center at Nibedita provides mental counseling and support. We drive to promote mental well-being. With custom care plans and a compassionate approach, we help individuals manage mental health challenges and improve their quality of life.",
            img: blogImg2
        },
        {
            id: 3,
            title: "Physiotherapy Center",
            des: "The Physiotherapy Center offers rehabilitation and pain management services to help individuals recover and maintain physical health. We provide specialist’s treatment plans to restore mobility and enhance long-term wellness.",
            img: blogImg3
        },
        {
            id: 4,
            title: "Canteen",
            des: "Nibedita’s Canteen serves healthy, affordable meals to promote better nutrition within the community. It aims to combat food insecurity. Our mission is to provide a clean, welcoming space to enjoy balanced meals.",
            img: blogImg4
        },
    ]
}

export const ourConcernSlice = createSlice({
    name: "whoWeAre",
    initialState,
    reducers: {},
});

export default ourConcernSlice.reducer;