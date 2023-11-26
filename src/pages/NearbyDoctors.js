import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { selectDoctor } from '../features/doctor/doctorSlice'
import { useSelector } from 'react-redux'

function DoctorCard(doctor){
   return(
    <Box
        sx={{
            backgroundColor:"#cdd6d6",
            borderRadius:"0.75rem",
            width:'30%',
            margin:'4rem',
            width:'25%',
            height:'34vh',
            padding:'1rem'
        }}>
        <Box>
            <Typography color={"#aa0c83"}>Doctor's Name :</Typography>
            <Typography>{doctor.name}</Typography>
        </Box>
        <Divider/>
        <Typography color={"#aa0c83"}>Doctors Location</Typography>
        <Typography>{doctor.location}</Typography>
        <Divider/>
        <Typography color={"#aa0c83"}>AGE :</Typography>
        <Typography>{doctor.age}</Typography>
        <Divider/>
        <Typography>{doctor.speciality}</Typography>
    </Box>
   )
}

function NearbyDoctors() {
    const doctors =useSelector(selectDoctor)
    console.log(doctors)
  return (
    <div>
        <NavBar/>
        <Box>
            {
                doctors.map(doctor =>(
                    <Box gap={'1rem'} display={'flex'} flexWrap={'wrap'}>{DoctorCard(doctor)}</Box>
                ))
            }
            
        </Box>
    </div>
  )
}

export default NearbyDoctors