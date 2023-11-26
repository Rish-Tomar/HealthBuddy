import React from 'react'
import FlexBetween from './FlexBetween'
import { AppBar, Box, Button, IconButton, InputBase, Toolbar, Typography} from '@mui/material'
import { Search } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const navigate=useNavigate()
  return (
    <Box sx={{ flexGrow: 1,justifyContent:'space-between' }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
                    fontSize="1000" fontWeight="bold"
                    onClick={()=>navigate('/')}
                    sx={{cursor:"pointer",flexGrow: 0.6}}>
                    HEALTHBUDDY
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Home</Button>
        <Button color="inherit" onClick={()=>navigate("/profile")}>Diagonosis</Button>
        <Button color="inherit">Medecines</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar



    