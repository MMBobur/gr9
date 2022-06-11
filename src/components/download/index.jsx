import React from 'react'
import {Box, Typography,Button} from '@mui/material'
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
function Download() {
  return (
    <Box sx={{bgcolor:'#F5493E',color:'black',justifyContent:'center',height:'80vh',width:'100%'}}>
      <Typography color="white" sx={{textAlign:'center'}}>
        <Typography variant="h4" sx={{paddingTop:'10%'}}>
          <b> Download Our App for all Platforms</b>
        </Typography>
        <Typography paddingTop="2%">
        It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned.
        </Typography>
      </Typography >
      <Typography color='black'sx={{gap:'20px',marginTop:'5%',textAlign:'center'}} >
        <Button sx={{
          border:'1px solid white',
          bgcolor:'white',
          paddingRight:'85px',height:'12vh'
        }}>
        <AiFillApple color="red" fontSize="50px"/> 
        <Typography color="black" sx={{fontSize:'20px'}}> Available</Typography>
        
        <Typography sx={{paddingTop:'5vh',marginLeft:'-107px',color:"black",fontSize:'12px'}}>on app Store</Typography>
        </Button>
        <Button sx={{
          border:'1px solid white',
          bgcolor:'white',
          paddingRight:'85px',
          marginLeft:'2%',height:'12vh'
        }}>
        <AiFillAndroid color="red" fontSize="50px"/> 
        <Typography color="black" sx={{fontSize:'20px'}}> Available</Typography>
        
        <Typography sx={{paddingTop:'5vh',marginLeft:'-107px',color:"black",fontSize:'12px'}}>on app Store</Typography>
        </Button>
        {/* <Button>
        <AiFillAndroid color="red" fontSize="50px"/> 
        </Button> */}
      </Typography>
    </Box>
  )
}

export default Download