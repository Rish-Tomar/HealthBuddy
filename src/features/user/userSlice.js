import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserDetails } from './userAPI';

const initialState = {
 user:{
    name:'Sunita Sharma',
    age : 66,
    gender :'Female',
    location:'Delhi',
    diagnosisHistory:[
        'Blood Pressure',
        'Diabaties'
    ],
    doctor:'Dr. LalPath'

 },
 status: 'idle',
};

export const fetchUserDetailsAsync = createAsyncThunk(
  'user/fetchUserDetails',
  async (values) => {
    console.log(values.id)
    const response = await fetchUserDetails(values);
    return response.data;
  }
);


export const userSlice = createSlice({
  name: 'counter',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetailsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDetailsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
  },
});
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
