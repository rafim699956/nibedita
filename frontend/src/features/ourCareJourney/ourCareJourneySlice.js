import { createSlice } from "@reduxjs/toolkit";
import galimg1 from "../../assets/images/sliderimg1.png";
import galimg2 from "../../assets/images/sliderimg2.png";
import galimg3 from "../../assets/images/sliderimg3.png";
import galimg4 from "../../assets/images/sliderimg4.png";
import galimg5 from "../../assets/images/sliderimg5.png";
import galimg6 from "../../assets/images/sliderimg6.png";
import galimg7 from "../../assets/images/sliderimg7.png";
import galimg8 from "../../assets/images/sliderimg8.png";
import galimg9 from "../../assets/images/sliderimg9.png";
import galimg10 from "../../assets/images/sliderimg10.png";
const initialState = {
  sectionTitle: "Our care journey",
  sliderImgs: [
    {
      id: 1,
      img: galimg1,
    },
    {
      id: 2,
      img: galimg2,
    },
    {
      id: 3,
      img: galimg3,
    },
    {
      id: 4,
      img: galimg4,
    },
    {
      id: 5,
      img: galimg5,
    },
    {
      id: 6,
      img: galimg6,
    },
    {
      id: 7,
      img: galimg7,
    },
    {
      id: 8,
      img: galimg8,
    },
    {
      id: 9,
      img: galimg9,
    },
    {
      id: 10,
      img: galimg10,
    },
  ],
};

export const ourCareJourneySlice = createSlice({
  name: "our care journey",
  initialState,
  reducers: {},
});
export default ourCareJourneySlice.reducer;
