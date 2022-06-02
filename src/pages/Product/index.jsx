import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import img1 from './img/1.webp'
import img2 from './img/2.webp'
import img3 from './img/3.webp'
import img4 from './img/4.webp'
import {
  Box,
  Button,
  Grid,
  InputBase,
  Rating,
  Typography,
} from "@mui/material";

export default () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={7} lg={7} xl={7} item sx={{ display: 'flex', justifyContent: 'center' }}>
          <Carousel
            showThumbs={true}
            showStatus={false}
            infiniteLoop
            width={'500px'}
            transitionTime={1000}
          >
            <Box>
              <img src={img1} />
            </Box>
            <Box sx={{}}>
              <img src={img2} />
            </Box>
            <Box sx={{}}>
              <img src={img3} />
            </Box>
            <Box sx={{}}>
              <img src={img4} />
            </Box>
          </Carousel>
        </Grid>
        <Grid xs={12} sm={12} md={5} lg={5} xl={5} item>
          <Typography
            sx={{
              borderTop: 3,
              width: "13%",
              textAlign: "left",
              color: "#FBB710",
              fontSize: 20,
            }}
          >
            $180
          </Typography>
          <Typography sx={{ width: "50%", textAlign: "left", fontSize: 30 }}>
            White Modern Chair
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              pt: 1,
            }}
          >
            <Rating
              name="half-rating-read"
              defaultValue={5}
              readOnly
              sx={{
                fontSize: 13,
                display: "flex",
              }}
            />
            <Typography sx={{ fontSize: 13 }}>Write A Review</Typography>
          </Box>
          <Typography sx={{ fontSize: 12, textAlign: "left", pt: 1 }}>
            {" "}
            In Stock
          </Typography>
          <Typography sx={{ pt: 2, textAlign: 'left', lineHeight: 2, color: '#959595' }}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Aliquid
            quae eveniet culpa officia <br /> quidem mollitia impedit iste asperiores
            nisi <br /> reprehenderit consequatur, autem, nostrum <br /> pariatur enim?
          </Typography>
          <Typography sx={{ width: "30%", display: "flex", mt: 5, p: 1, bgcolor: '#F5F7FA', color: '#959595' }}>
            Qty
            <Typography sx={{ ml: 10 }}>

              {count}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", ml: 5, color: '#959595' }}>
              <Button
                onClick={() => setCount(count + 1)}
                sx={{ minWidth: "5px", maxWidth: "5px", maxHeight: "5px", color: '#959595' }}
              >
                <ArrowDropUpIcon />
              </Button>
              <Button
                onClick={() => setCount(count - 1)}
                sx={{ minWidth: "5px", maxWidth: "5px", maxHeight: "5px", color: '#959595' }}
              >
                <ArrowDropDownIcon />
              </Button>
            </Box>
          </Typography>
          <Button sx={{ border: 1, float: 'left', borderRadius: 0, pl: 13, pr: 13, pt: 3, pb: 3, bgcolor: '#FBB710', mt: 7, color: 'white', ":hover": { bgcolor: 'black' } }}>Add to cart</Button>
        </Grid>
      </Grid>
      {/*  */}
    </>
  );
};
