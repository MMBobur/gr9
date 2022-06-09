import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rasm1 from './img/xc1.jpg.pagespeed.ic.iba0ZvuA8B.webp'
import Rasm2 from './img/xc2.jpg.pagespeed.ic.0mMVyHHNqT.webp'
import Rasm3 from './img/xc3.jpg.pagespeed.ic.MAqweJnJ6L.webp'
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Autoplay, Pagination } from "swiper";


// npm install swiper



export default function App() {
  return (
    <div style={{paddingTop:'7%',background:'#f9f9ff',paddingBottom:'7%',width:'100%'}}>
    <Box sx={{textAlign:'center'}} >
      <Typography sx={{fontSize:'36px',fontWeight:'600'}}>Top Courses That are open for Students</Typography>
      <Typography color='text.secondary' sx={{paddingBottom:'5%'}}>Who are in extremely love with eco friendly system.</Typography>
    </Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{background:'#f9f9ff'}} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={Rasm1}
            />
            <Button variant="contained" sx={{ '&:hover':{background:'#f53f51'} ,paddingLeft:'7%',paddingRight:'7%',position:'absolute',marginTop:'-70px',marginLeft:'-150px',background:'#f53f51'}} >For Sale</Button>
            <CardContent sx={{textAlign:'left'}}>
              <Typography sx={{fontWeight:'bold',width:'100%',fontSize:'20px'}} gutterBottom variant="h5" component="div">
              Breakthrough Thinking
               <Box sx={{textAlign:'right',marginTop:'-25px',color:'#f53f51'}} >$25</Box>
              </Typography>

              <Typography variant="body2"  color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{background:'#f9f9ff'}} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={Rasm2}
            />
            <Button variant="contained" sx={{'&:hover':{background:'#f53f51'} ,paddingLeft:'7%',paddingRight:'7%',position:'absolute',marginTop:'-70px',marginLeft:'-150px',background:'#f53f51'}} >For Sale</Button>

            <CardContent sx={{textAlign:'left'}}>
              <Typography sx={{fontWeight:'bold',width:'100%',fontSize:'20px'}} gutterBottom variant="h5" component="div">
              Breakthrough Thinking
               <Box sx={{textAlign:'right',marginTop:'-25px',color:'#f53f51'}} >$25</Box>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{background:'#f9f9ff'}} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={Rasm3}
            />
            <Button variant="contained" sx={{'&:hover':{background:'#f53f51'} ,paddingLeft:'7%',paddingRight:'7%',position:'absolute',marginTop:'-70px',marginLeft:'-150px',background:'#f53f51'}} >For Sale</Button>

            <CardContent sx={{textAlign:'left'}}>
            <Typography sx={{fontWeight:'bold',width:'100%',fontSize:'20px'}} gutterBottom variant="h5" component="div">
              Breakthrough Thinking
               <Box sx={{textAlign:'right',marginTop:'-25px',color:'#f53f51'}} >$25</Box>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{background:'#f9f9ff'}} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={Rasm1}
            />
            <Button variant="contained" sx={{'&:hover':{background:'#f53f51'} ,paddingLeft:'7%',paddingRight:'7%',position:'absolute',marginTop:'-70px',marginLeft:'-150px',background:'#f53f51'}} >For Sale</Button>

            <CardContent sx={{textAlign:'left'}}>
            <Typography sx={{fontWeight:'bold',width:'100%',fontSize:'20px'}} gutterBottom variant="h5" component="div">
              Breakthrough Thinking
               <Box sx={{textAlign:'right',marginTop:'-25px',color:'#f53f51'}} >$25</Box>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{background:'#f9f9ff'}} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={Rasm2}
            />
            <Button variant="contained" sx={{'&:hover':{background:'#f53f51'} ,paddingLeft:'7%',paddingRight:'7%',position:'absolute',marginTop:'-70px',marginLeft:'-150px',background:'#f53f51'}} >For Sale</Button>

            <CardContent sx={{textAlign:'left'}}>
            <Typography sx={{fontWeight:'bold',width:'100%',fontSize:'20px'}} gutterBottom variant="h5" component="div">
              Breakthrough Thinking
               <Box sx={{textAlign:'right',marginTop:'-25px',color:'#f53f51'}} >$25</Box>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{background:'#f9f9ff'}}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={Rasm3}
            />
            <Button variant="contained" sx={{'&:hover':{background:'#f53f51'} ,paddingLeft:'7%',paddingRight:'7%',position:'absolute',marginTop:'-70px',marginLeft:'-150px',background:'#f53f51'}} >For Sale</Button>

            <CardContent sx={{textAlign:'left'}}>
            <Typography sx={{fontWeight:'bold',width:'100%',fontSize:'20px'}} gutterBottom variant="h5" component="div">
              Breakthrough Thinking
               <Box sx={{textAlign:'right',marginTop:'-25px',color:'#f53f51'}} >$25</Box>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
        </SwiperSlide>
        {/* <SwiperSlide style={{ background: 'red' }}>Slide 7</SwiperSlide>
        <SwiperSlide style={{ background: 'yellow' }}>Slide 8</SwiperSlide>
        <SwiperSlide style={{ background: 'red' }}>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
