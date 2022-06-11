import React, { useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Grid, Pagination } from "swiper";
import Img1 from './img/opaca.jpg'
import Img2 from './img/quyon.jpg'
import Img3 from './img/stiker.jpg'

export const Carusel = () => {
  return (
    <div style={{ marginTop:'10%' }} >
      <>
          <Typography variant="h4" sx={{textAlign:'center'}}>
          What our Reader's Say about us
          </Typography>
          <Typography sx={{textAlign:'center'}}>
          Who are in extremely love with eco friendly system.
          </Typography><br /><br /><br /><br /><br /><br />
        <Swiper 
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        
            <Typography style={{marginTop:'10%'}}>
              <SwiperSlide style={{border:'1px solid black',flexDirection:"column", display:'flex', justifyContent:"center",textAlign:'center'}}><img src={Img1} style={{marginLeft:"35%",width:'30%',borderRadius:'100%',height:'20vh'}} /> <p style={{color:'#808592',fontSize:'17px',width:'90%',textAlign:'center'}}>Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit. Voluptate dolorem nam, modi fugit ad amet culpa soluta officiis a Eius, enim. Eveniet, alias. salom</p> 
              <Typography variant='h5' sx={{textAlign:'center',pl:'22%'}}>
               <b> Mark Alviro Wiens</b>
              </Typography>
              <Typography sx={{pl:'35%'}}>
                Geo at google
              </Typography>
              </SwiperSlide>
              <SwiperSlide style={{border:'1px solid black',flexDirection:"column", display:'flex', justifyContent:"center",textAlign:'center'}}><img src={Img2} style={{marginLeft:"35%",width:'30%',borderRadius:'100%',height:'20vh'}} /> <p style={{color:'#808592',fontSize:'17px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem nam, modi fugit ad amet culpa soluta officiis a harum ipsum dicta impedit, quae quam vel. Eius, enim. Eveniet, alias.</p> 
              <Typography variant='h5' sx={{textAlign:'center',pl:'22%'}}>
               <b> Mark Alviro Wiens</b>
              </Typography>
              <Typography sx={{pl:'35%'}}>
                Geo at google
              </Typography>
              </SwiperSlide>
              <SwiperSlide style={{border:'1px solid black',flexDirection:"column", display:'flex', justifyContent:"center",textAlign:'center'}}><img src={Img3} style={{marginLeft:"35%",width:'30%',borderRadius:'100%',height:'20vh'}} /> <p style={{color:'#808592',fontSize:'17px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem nam, modi fugit ad amet culpa soluta officiis a harum ipsum dicta impedit, quae quam vel. Eius, enim. Eveniet, alias.</p> 
              <Typography variant='h5' sx={{textAlign:'center',pl:'22%'}}>
               <b> Mark Alviro Wiens</b>
              </Typography>
              <Typography sx={{pl:'35%'}}>
                Geo at google
              </Typography>
              </SwiperSlide>
              <SwiperSlide style={{border:'1px solid black',flexDirection:"column", display:'flex', justifyContent:"center",textAlign:'center'}}><img src={Img1} style={{marginLeft:"35%",width:'30%',borderRadius:'100%',height:'20vh'}} /> <p style={{color:'#808592',fontSize:'17px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem nam, modi fugit ad amet culpa soluta officiis a harum ipsum dicta impedit, quae quam vel. Eius, enim. Eveniet, alias.</p> 
              <Typography variant='h5' sx={{textAlign:'center',pl:'22%'}}>
               <b> Mark Alviro Wiens</b>
              </Typography>
              <Typography sx={{pl:'35%'}}>
                Geo at google
              </Typography>
              </SwiperSlide>
              <SwiperSlide style={{border:'1px solid black',flexDirection:"column", display:'flex', justifyContent:"center",textAlign:'center'}}><img src={Img2} style={{marginLeft:"35%",width:'30%',borderRadius:'100%',height:'20vh'}} /> <p style={{color:'#808592',fontSize:'17px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem nam, modi fugit ad amet culpa soluta officiis a harum ipsum dicta impedit, quae quam vel. Eius, enim. Eveniet, alias.</p> 
              <Typography variant='h5' sx={{textAlign:'center',pl:'22%'}}>
               <b> Mark Alviro Wiens</b>
              </Typography>
              <Typography sx={{pl:'35%'}}>
                Geo at google
              </Typography>
              </SwiperSlide>
              <SwiperSlide style={{border:'1px solid black',flexDirection:"column", display:'flex', justifyContent:"center",textAlign:'center'}}><img src={Img3} style={{marginLeft:"35%",width:'30%',borderRadius:'100%',height:'20vh'}} /> <p style={{color:'#808592',fontSize:'17px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem nam, modi fugit ad amet culpa soluta officiis a harum ipsum dicta impedit, quae quam vel. Eius, enim. Eveniet, alias.</p> 
              <Typography variant='h5' sx={{textAlign:'center',pl:'22%'}}>
               <b> Mark Alviro Wiens</b>
              </Typography>
              <Typography sx={{pl:'35%'}}>
                Geo at google
              </Typography>
              </SwiperSlide>
            </Typography>

        
        </Swiper>
      </>
    </div>
  )
}
export default Carusel