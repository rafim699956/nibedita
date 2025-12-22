import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sectionTitle: "Contact us",
  sectionDes:
    "Feel free to reach out with any questions about our services. You can contact us via email, phone, or visit us directly.",
  formData: [],
  address: "Office address full goes here, dhaka, banglade",
  contactNum: +8801717324664,
  ourEmail: "uremail@email.com",
};

export const contactUsSlice = createSlice({
  name: "contact us",
  initialState,
  reducers: {
    addFromData: (state, action) => {
      state.formData.push(action.payload);
    },
  },
});
export const { addFromData } = contactUsSlice.actions;

export default contactUsSlice.reducer;
