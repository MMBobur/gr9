import * as React from 'react';
import './style.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%',paddingTop:'7%',paddingBottom:'10%' }}>
      <Grid justifyContent='center' container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Box sx={{textAlign:'center'}} >
            <Typography sx={{fontSize:'36px',fontWeight:'600'}} >Purchase whatever you want</Typography>
            <Typography color='text.secondary' >Who are in extremely love with eco friendly system.</Typography>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={3.5} lg={3.5}>
          <Box className='box1' sx={{ border: '1px solid #eeeeee', textAlign: 'center', paddingBottom: '10%' }}>
            <Typography sx={{ fontWeight: '600', background: '#fbfcff', borderBottom: '1px solid #eeeeee', padding: '10%' }} >PDF</Typography>
            <Typography sx={{ paddingTop: '8%' }}>Who are in extremely love with<br />eco friendly system.</Typography>
            <Box sx={{ paddingTop: '15%' }}>
              <Box className='box2' sx={{ background: '#fbfcff', width: '80%', marginLeft: '10%' }} >
                <Typography sx={{ fontWeight: '300', fontSize: '60px', paddingTop: '7%' }} >
                  <span style={{ fontSize: '25px', marginTop: '-0px', marginLeft: '-20px', position: 'absolute' }} >$</span>
                  79.99
                </Typography>
                <Typography sx={{ paddingBottom: '7%' }} >
                  <Button className='purchase' variant="contained" sx={{ background: '#222', padding: '3%', borderRadius: '50px', paddingLeft: '10%', paddingRight: '10%', '&:hover': { background: 'red' } }}>Purchase Now</Button>
                </Typography>

              </Box>

            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={3.5} lg={3.5}>
          <Box className='box1' sx={{ border: '1px solid #eeeeee', textAlign: 'center', paddingBottom: '10%' }}>
            <Typography sx={{ fontWeight: '600', background: '#fbfcff', borderBottom: '1px solid #eeeeee', padding: '10%' }} >E-Book</Typography>
            <Typography sx={{ paddingTop: '8%' }}>Who are in extremely love with<br />eco friendly system.</Typography>
            <Box sx={{ paddingTop: '15%' }}>
              <Box className='box2' sx={{ background: '#fbfcff', width: '80%', marginLeft: '10%' }} >
                <Typography sx={{ fontWeight: '300', fontSize: '60px', paddingTop: '7%' }} >
                  <span style={{ fontSize: '25px', marginTop: '-0px', marginLeft: '-20px', position: 'absolute' }} >$</span>
                  99.99
                </Typography>
                <Typography sx={{ paddingBottom: '7%' }} >
                  <Button className='purchase' variant="contained" sx={{ background: '#222', padding: '3%', borderRadius: '50px', paddingLeft: '10%', paddingRight: '10%', '&:hover': { background: 'red' } }}>Purchase Now</Button>
                </Typography>

              </Box>

            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={3.5} lg={3.5}>
          <Box className='box1' sx={{ border: '1px solid #eeeeee', textAlign: 'center', paddingBottom: '10%' }}>
            <Typography sx={{ fontWeight: '600', background: '#fbfcff', borderBottom: '1px solid #eeeeee', padding: '10%' }} >Print Copy</Typography>
            <Typography sx={{ paddingTop: '8%' }}>Who are in extremely love with<br />eco friendly system.</Typography>
            <Box sx={{ paddingTop: '15%' }}>
              <Box className='box2' sx={{ background: '#fbfcff', width: '80%', marginLeft: '10%' }} >
                <Typography sx={{ fontWeight: '300', fontSize: '60px', paddingTop: '7%' }} >
                  <span style={{ fontSize: '25px', marginTop: '-0px', marginLeft: '-20px', position: 'absolute' }} >$</span>
                  59.99
                </Typography>
                <Typography sx={{ paddingBottom: '7%' }} >
                  <Button className='purchase' variant="contained" sx={{ background: '#222', padding: '3%', borderRadius: '50px', paddingLeft: '10%', paddingRight: '10%', '&:hover': { background: 'red' } }}>Purchase Now</Button>
                </Typography>

              </Box>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
