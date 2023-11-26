import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import doctorReducer from '../features/doctor/doctorSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
    doctor:doctorReducer
  },
})