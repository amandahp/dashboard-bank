import React, {useEffect} from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from '../../utils/Logo';
import {
  Box,
  Container,
  Grid,
  Avatar,
  Typography,
  Select
} from '@material-ui/core';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import PersonIcon from '@material-ui/icons/Person';
import { grey } from '@material-ui/core/colors';


const MainNavbar = (props) => {
  useEffect(() => {
    localStorage.setItem("user","Amanda")
  }, [])

  const user = localStorage.getItem("user")

  return(
    <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <Box display="flex">
        <Logo />
        <Avatar sx={{backgroundColor: grey[300], marginLeft:10, marginTop:1.5}}>
          <ViewModuleIcon
          />
        </Avatar>
        <Box
        sx={{color: 'text.secondary', marginTop:2, marginLeft:2}}
        >
          <Typography
            sx={{position:'relative', top:'14%'}}
            variant="h4"
          >
            RESUMO
          </Typography>
        </Box>
        <Avatar sx={{backgroundColor: grey[300], marginLeft:130, marginTop:2}}>
          <PersonIcon />
        </Avatar>
        <Select sx={{color: 'text.secondary', marginTop:2, marginLeft:2, width:100}}>
          <option value={user} style={{background:"#F4F6F8", padding:10}}>
            {user}
          </option>
        </Select>
      </Box>
    </Toolbar>
  </AppBar>
  )
};

export default MainNavbar;
