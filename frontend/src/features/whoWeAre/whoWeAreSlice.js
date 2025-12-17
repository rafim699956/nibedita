import { createSlice } from "@reduxjs/toolkit";
import tabimg1 from "../../assets/images/tabimg1.png";
import tabimg2 from "../../assets/images/blogimg1.png";
import tabimg3 from "../../assets/images/blogimg2.png";

const initialState = {
  sectionTitle: "Who we are",
  sectionDes:
    "CWFD Nibedita is an initiative to empower communities through all-in-all services that includes physical and mental health. Founded in 1975, we have a legacy of care and commitment. Our  focus is on physical, mental, and the well-being of mother and child.",
  navTabs: {
    tabBtn: [
      {
        id: 1,
        label: "Mission & Vision",
      },
      {
        id: 2,
        label: "Core Values",
      },
      {
        id: 3,
        label: "Objectives",
      },
    ],
    tabBody: [
      {
        id: 1,
        label: "Mission & Vision",
        tabImg: tabimg1,
        tabDesTitle1: "Mission",
        tabDes1:
          "We provide integrated health services to meet the diverse needs of individuals that range from physical healthcare to mental health support and nutritional nourishment. By delivering these services, we aim to strengthen the health of communities, promote gender equality, and ensure that every individual can live with dignity and strength.",
        tabDesTitle2: "Vision",
        tabDes2:
          "To empower communities with a sustainable productive future where access to health including physical, reproductive and mental well-being; as well as nutritional nourishment is considered as fundamental rights within family and society.",
      },
      {
        id: 2,
        label: "Core Values",
        tabImg: tabimg2,
        tabDesTitle1: "Core",
        tabDes1:
          "We provide integrated health services to meet the diverse needs of individuals that range from physical healthcare to mental health support and nutritional nourishment. By delivering these services, we aim to strengthen the health of communities, promote gender equality, and ensure that every individual can live with dignity and strength.",
        tabDesTitle2: "Values",
        tabDes2:
          "To empower communities with a sustainable productive future where access to health including physical, reproductive and mental well-being; as well as nutritional nourishment is considered as fundamental rights within family and society.",
      },
      {
        id: 3,
        label: "Objectives",
        tabImg: tabimg3,
        tabDesTitle1: "Objectives",
        tabDes1:
          "We provide integrated health services to meet the diverse needs of individuals that range from physical healthcare to mental health support and nutritional nourishment. By delivering these services, we aim to strengthen the health of communities, promote gender equality, and ensure that every individual can live with dignity and strength.",
        tabDesTitle2: "Objectives Values",
        tabDes2:
          "To empower communities with a sustainable productive future where access to health including physical, reproductive and mental well-being; as well as nutritional nourishment is considered as fundamental rights within family and society.",
      },
    ],
  },
};

export const whoWeAreSlice = createSlice({
  name: "whoWeAre",
  initialState,
  reducers: {},
});

export default whoWeAreSlice.reducer;
