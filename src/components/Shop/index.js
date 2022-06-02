import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import StarIcon from '@mui/icons-material/Star';
import Rasm1 from '../../components/Shop/images/rasm1.webp'
import Rasm2 from '../../components/Shop/images/rasm2.webp'
import Rasm3 from '../../components/Shop/images/rasm3.webp'
import Rasm4 from '../../components/Shop/images/rasm4.webp'
import Rasm5 from '../../components/Shop/images/rasm5.webp'
import Rasm6 from '../../components/Shop/images/rasm6.webp'
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import Slider from '../../components/Shop/slider'
import './index.css'

const data = [
    {
        id: 1,
        img: Rasm1,
        img2: Rasm2,

    },
    {
        id: 2,
        img: Rasm2,
        img2: Rasm3,

    },
    {
        id: 3,
        img: Rasm3,
        img2: Rasm4,

    },
    {
        id: 4,
        img: Rasm4,
        img2: Rasm5,

    },
    {
        id: 5,
        img: Rasm5,
        img2: Rasm6,

    },
    {
        id: 6,
        img: Rasm6,
        img2: Rasm1,
    },
];

// Only loads the YouTube player

function Home() {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", mb: "80px", py: "80px" }}>
                <Box sx={{ width: "90%" }}>
                    <Typography>
                        SHOWING 1-8 0F 25
                    </Typography>
                    <br />
                    <Box sx={{ width: "100%" }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Grid xs={12} sm={5} md={5}>
                                <Box sx={{ ml: "20px", mt:"15px" }}>
                                    <WindowIcon style={{ backgroundColor: "#E8A90F", color: "white", padding: "10px", fontSize: "20px" }} />
                                    <MenuIcon style={{ backgroundColor: "black", color: "white", padding: "10px", fontSize: "20px" }} />
                                </Box>

                            </Grid>
                            <Grid xs={12} sm={5} md={7} >
                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                    <Box sx={{ width: "40%", m: 1 }} >
                                        <Slider />
                                    </Box>
                                    <Box sx={{ width: "40%", m: 1 }}>
                                        <Slider />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <br />

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {data.map((item) => {
                            return (
                                <Grid xs={12} sm={5} md={6} sx={{ display: "flex", justifyContent: "center", }}>
                                    <Box sx={{ width: "92%", mb: "40px" }}>
                                        <Box>
                                            {/* <CardMedia
                                                component="img"
                                                height="auto"
                                                image={item.img}
                                            /> */}
                                            <Box className="container">
                                                <img src={item.img} className="image" />
                                                <Typography class="overlay">
                                                    <Typography class="text">
                                                        <img src={item.img2} className="image2" />
                                                    </Typography>
                                                </Typography>
                                            </Box>
                                            <Typography>
                                                <br />
                                                <Typography sx={{ width: "20%" }}>
                                                    <hr style={{ border: "1.5px solid #FBB710", background: "#FBB710" }} />
                                                </Typography>
                                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#FBB710", fontSize: "26px" }}>
                                                        $180
                                                    </Typography>
                                                    <Typography>
                                                        <StarIcon sx={{ color: "#FBB710", fontSize: "15px" }} />
                                                        <StarIcon sx={{ color: "#FBB710", fontSize: "15px" }} />
                                                        <StarIcon sx={{ color: "#FBB710", fontSize: "15px" }} />
                                                        <StarIcon sx={{ color: "#FBB710", fontSize: "15px" }} />
                                                        <StarIcon sx={{ color: "#FBB710", fontSize: "15px" }} />

                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "17px" }}>
                                                        Modern Chair
                                                    </Typography>
                                                    <Typography>
                                                        <LocalGroceryStoreOutlinedIcon sx={{ color: "#9E9E9E", fontSize: "25px", }} />
                                                    </Typography>
                                                </Box>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>

        </>
    );
}


export default Home
{/* <Box sx={{ border: "2px solid red", height: "50vh", width: "100%", backgroundImage: `url(${Rasm1})`, ':hover': { backgroundImage: `url(${Rasm2})`, transition: "0.5s" }, backgroundSize: "cover" }}>

                                            </Box> */}