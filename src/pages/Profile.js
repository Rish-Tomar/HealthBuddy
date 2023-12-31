import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Box, Button, Divider, Typography } from '@mui/material'
import { LocationOnOutlined, WorkOutlineOutlined } from '@mui/icons-material'
import FlexBetween from '../components/NavBar/FlexBetween'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import avatar from '../assets/avatar.jpeg'
import { useNavigate } from 'react-router-dom'
const UserImage =({size="60px"})=>{
    return (
        <Box width={size} height={size}>
            <img
                style={{objectFit:"cover", borderRadius:"50%",}}
                        width={size} 
                        height={size}
                       alt="user Image"
                       src={avatar}
       
            />
        </Box>
    )
}

function Profile() {
    const user =useSelector(selectUser)
    const navigate=useNavigate()
    console.log(user)
  return (
    <div>
        <NavBar/>
        <Box
            sx={{
                backgroundColor:"#ffffff",
                borderRadius:"0.75rem",
                margin:'auto',
                marginTop:'1.5rem',
                p:"1.5rem 0.75rem",
                gap:"0.5rem",
                height:"45vh",
                width:'35%',
                backgroundColor:'#e2efef'
            }}
        >
           <Box display="flex" flexDirection="row" alignItems="center" gap="1rem" margin={"0.75rem"}>
                 { UserImage("")}
                <Typography>{user.name}</Typography>
                <Typography>{user.age}</Typography>
           </Box>
           <Divider/>
           <Box p="1rem 0.75rem">
                <Box display={"flex"} alignItems={"center"}gap={"1rem"}>
                    <LocationOnOutlined/>
                    <Typography>{user.location}</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"}gap={"1rem"}>
                    <Typography>AGE</Typography>
                    <Typography>{user.age}</Typography>
                </Box>
           </Box>
           <Divider/>
           <FlexBetween display={"flex"} flexDirection={'column'} alignItems={"center"}gap={"1rem"}>
                <Typography color={"#aa0c83"}>Diagnosis History</Typography>
                <FlexBetween flexDirection={"column"} alignItems={"normal"}>
                    {
                        user.diagnosisHistory.map( (diagnosis,index) =>(
                            <Typography>{(index+1)+" "+diagnosis}</Typography>
                        ))
                    }
                </FlexBetween>
           </FlexBetween>
           <Divider/>
           <Box p="1rem 0.75rem">
                <Box display={"flex"} alignItems={"center"}gap={"1rem"}>
                    <Typography color={"#aa0c83"}>Doctor</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"}gap={"1rem"}>
                    <Typography> { user.doctor}</Typography>
                </Box>
           </Box>
           <Box p="2rem 0.75rem"><Button onClick={()=>navigate('/nearbydoctors')}><Typography variant="h5" color={"#054e4e"}>NEARBY DOCTORS</Typography></Button></Box>
        </Box>
    </div>
  )
}



export default Profile