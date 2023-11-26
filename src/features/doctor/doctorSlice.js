import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
 doctor:[
    {
        name:'Alok GusTov',
        age : 45,
        location:'Aligarh',
        speciality:'Cardiologist'
    },
    {
        name:'Henry Einstien',
        age : 36,
        location:'Aligarh',
        speciality:'ENT Specialist'
    }
 ],
 status: 'idle',
};


export const userSlice = createSlice({
  name: 'counter',
  initialState,
});

export const selectDoctor = (state) => state.doctor.doctor;

export default userSlice.reducer;
