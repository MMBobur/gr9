import React from "react";
import { Box, Grid } from "@mui/material";
import Shop from '../../components/Shop/Page'
import Shop2 from '../../components/Shop/index'


function Header() {
    return (
        <>
            <Box sx={{ width: "100%", }}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: "flex", justifyContent: "center", }}>

                    <Grid xs={12} md={2.5} sm={12}>
                        <Shop />
                    </Grid>
                    <Grid xs={12} md={9.5} sm={12}  >
                        <Shop2 />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Header