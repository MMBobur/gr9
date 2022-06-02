import React from "react";
import { Box, Link, Grid, Typography, Container } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import rasm from "../Footer/xlogo2.png.pagespeed.ic.1GnA-tH3S_.webp";
import ListItemButton from "@mui/material/ListItemButton";
import './index.css'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));


export default () => {
  return (
    <Box sx={{ position: "absolute", width: "100%" }}>
      <Box sx={{ background: "#3C3C3C", padding: "100px 0px 100px 0px" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ color: "white" }}>
                Subscribe for a 25% Discount
              </Typography>
              <Typography>
                Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
                amet mi vulputate consectetur. Donec auctor interdum purus, ac
                finibus massa bibendum nec.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ alignItems: "center", display: "flex" }}
            >
              <BootstrapInput
                placeholder="Enter Your E-mail..."
                id="bootstrap-input"
              />
              <Button
                sx={{
                  width: "140px",
                  borderRadius: "0px",
                  padding: "10px 0px 10.5px 0px",
                  color: "white",
                  fontWeight: "600",
                  background: "#FBB710",
                  ":hover": { background: "#FBB710" },
                }}
              >
                %Discount%
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#252525", padding: "100px 0px 100px 0px" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img src={rasm} />
              <Typography>
                Copyright ©2022 All rights reserved | This template is made{" "}
                <br /> with by Colorlib
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display:{xs:'none', md:'flex'} }}>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Home
                </ListItemButton>
              </Grid>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Shop
                </ListItemButton>
              </Grid>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Product
                </ListItemButton>
              </Grid>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Cart
                </ListItemButton>
              </Grid>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Checkout
                </ListItemButton>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display:{xs:'flex',flexDirection:'column' ,md:'none'} }}>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Home
                </ListItemButton>
              </Grid>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Shop
                </ListItemButton>
              </Grid>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Product
                </ListItemButton>
              </Grid>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Cart
                </ListItemButton>
              </Grid>
              <Grid xs={4} md={2}>
                <ListItemButton className="aa">
                  <span className="spann"></span> Checkout
                </ListItemButton>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
