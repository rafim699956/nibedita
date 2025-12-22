import { createSlice } from "@reduxjs/toolkit";
const timeLine = [
    { id: 1, year: "1975", text: "Founding CWFP to address the demanding societal needs." },
    { id: 2, year: "1980", text: "Opening of Nibedita Canteen to serve the customers within the CWFD campus." },
    { id: 3, year: "2001", text: "CWFD moved to its own office complex in Banasree, Rampura." },
    { id: 4, year: "2004", text: "Nibedita Clinic starts providing maternal and child health services." },
    { id: 5, year: "2014", text: "CWFD's Nibedita Mental Health Centre starts offering online support." },
    { id: 6, year: "2021", text: "Establishment of Nibedita Mental Health Centre to provide in-person service." },
    { id: 7, year: "2023", text: "Changing name to Saleha Khanam Nibedita Maternal and Child Health Centre." },
];

export const historyofNibeditaSlice = createSlice({
    name: "history of Nibedita",
    initialState: {
        sectionTitle: "History of the Nibedita",
        sectionDes: "CWFD Nibedita is an initiative to empower communities through all-in-all services that includes physical and mental health. Founded in 1975, we have a legacy.",
        timeLine
    },
    reducers: {}
});

export default historyofNibeditaSlice.reducer;