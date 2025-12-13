import { createSlice } from '@reduxjs/toolkit'
import latestnewsimg1 from "../../assets/images/latestnewsimg1.png";
import latestnewsimg2 from "../../assets/images/latestnews2.png";
const initialState = {
    sectionTitle: "Latest news",
    sectionDes: "To learn more about our approach and the quality of our services, explore our case studies section.",
    news: [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consect viverra morbi",
            des: "Lorem ipsum dolor sit amet consectetur. Ac purus amet odio ac augue faucibus est mauris tincidunt justo lectus amet nulla egestas dictum .....",
            img: latestnewsimg1,
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consect viverra morbi",
            des: "Lorem ipsum dolor sit amet consectetur. Ac purus amet odio ac augue faucibus est mauris tincidunt justo lectus amet nulla egestas dictum .....",
            bgColor: "#FBBC10"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consect viverra morbi",
            des: "Lorem ipsum dolor sit amet consectetur. Ac purus amet odio ac augue faucibus est mauris tincidunt justo lectus amet nulla egestas dictum .....",
            bgColor: "#9D5DA3"
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consect viverra morbi",
            des: "Lorem ipsum dolor sit amet consectetur. Ac purus amet odio ac augue faucibus est mauris tincidunt justo lectus amet nulla egestas dictum .....",
            img: latestnewsimg2,
        },
    ],

}

export const latestNewsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {}
})

export default latestNewsSlice.reducer