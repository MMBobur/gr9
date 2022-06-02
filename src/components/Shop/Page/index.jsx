import * as React from 'react';
import { Typography, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [{ id: 1, title: "Chairs" }, { id: 2, title: "Beds", title2: "Beds" }, { id: 3, title: "Accesories", title2: "Beds" }, { id: 4, title: "Furniture", title2: "Beds" }, { id: 5, title: "Home deco" }, { id: 7, title: "Dressings" }, { id: 8, title: "Tables" }]

const data2 = [{ id: 1, title: "Amado" }, { id: 2, title: "Ikea" }, { id: 3, title: "Furniture Inc" }, { id: 4, title: "The factory" }, { id: 5, title: "Artdeco" }]



function Home() {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: "#EEF0F3", color: "#9595A2", display: "flex", justifyContent: "center", textAlign: "center" }}>
            <Box sx={{ py: "60px", width: "70%", textAlign: "left" }}>
                <Typography sx={{ marginTop: "20px", color: "black", fontWeight: "600" }}>
                    Catagories
                </Typography>
                {data.map((item) => {
                    return (
                        <Box key={item.id}>
                            <Typography sx={{ fontWeight: "600", mt: "20px", ":hover": { color: "#FBB710", fontWeight: "600" } }}>
                                {item.title}
                            </Typography>
                        </Box>
                    )
                })}
                <Typography sx={{ m: "50px 50px 0px 20px", color: "black", fontWeight: "600" }}>
                    Brands
                </Typography>

                {data2.map((item) => {
                    return (
                        <Box key={item.id}>
                            <Typography sx={{ fontWeight: "600", mt: "20px", ":hover": { color: "#FBB710", fontWeight: "600" } }}>
                                <Checkbox {...label} />{item.title}
                            </Typography>
                        </Box>
                    )
                })}
                <br />
                <br />

                <Typography sx={{ m: "0px 0px 0px 0px", color: "black", fontWeight: "600" }}>
                    Color
                </Typography>
                <Stack sx={{ mt: "30px" }}>
                    <Box sx={{ display: "flex" }}>
                        <Avatar sx={{ m: "2px", width: "30px", height: "30px", background: "white", color: "white" }}></Avatar>
                        <Avatar sx={{ m: "2px", width: "30px", height: "30px", background: "#969696", color: "#969696" }}></Avatar>
                        <Avatar sx={{ m: "2px", width: "30px", height: "30px", background: "#030303", color: "#030303" }}></Avatar>
                        <Avatar sx={{ m: "2px", width: "30px", height: "30px", background: "#0315FF", color: "#0315FF" }}></Avatar>
                    </Box>
                    <br />
                    <Box sx={{ display: "flex" }}>
                        <Avatar sx={{ m: "2px", width: "30px", height: "30px", background: "#DC0647", color: "#DC0647" }}></Avatar>
                        <Avatar sx={{ m: "2px", width: "30px", height: "30px", background: "#FFF56A", color: "#FFF56A" }}></Avatar>
                        <Avatar sx={{ m: "2px", width: "30px", height: "30px", background: "#F26E51", color: "#F26E51" }}></Avatar>
                        <Avatar sx={{ m: "2px", width: "30px", height: "30px", background: "#9A8777", color: "#9A8777" }}></Avatar>
                    </Box>
                </Stack>
                <br />
                <br />

                <Typography sx={{ m: "0px 0px 0px 0px", color: "black", fontWeight: "600" }}>
                    Price
                </Typography>
                <br />

                <Box sx={{ width: "100%" }}>
                    <Slider
                        sx={{ color: "#FBB710" }}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    <Typography sx={{ m: "0px 0px 0px 0px", color: "grey", fontWeight: "600" }}>
                        $10 - $881
                    </Typography>
                </Box>

            </Box >
        </Box>
    );
}

export default Home