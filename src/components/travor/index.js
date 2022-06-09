import { Grid, Typography, CardMedia } from '@mui/material'
import React from 'react'
import Boy from "./../../page/img/lonely-boy.webp"
import Check from "./../../page/img/check.webp"

function Travor() {
  return (
    <div>
      <Grid width="100%" pt="10%" pb="5%" sx={{ paddingLeft: { lg: "11%", md: "13%", sm: "0%", xs: "12%" }, paddingRight: { lg: "5%", md: "0%", sm: "0%", xs: "2%" } }}>
        <Grid sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" } }}>

          <Grid textAlign="center" pb="4%" item md="2" sx={{ marginTop: { lg: "0%", md: "0%", sm: "0%", xs: "0%" }, marginLeft: { lg: "-6%", md: "-15%", sm: "0%", xs: "0%" }, marginRight: { lg: "0%", md: "0%", sm: "0%", xs: "10%" }, width: { lg: "100%", md: "80%", sm: "100%" }, paddingRight: { lg: "0%", md: "0%", sm: "0%", xs: "20%" }, }}>
            {/* <img src={Boy} /> */}
            <CardMedia
              component="img"
              image={Boy}
              sx={{ marginTop: { lg: "0%", md: "0%", sm: "0%", xs: "0%" }, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginLeft: { lg: "-6%", md: "0%", sm: "5%", xs: "0%" }, marginRight: { lg: "0%", md: "0%", sm: "0%", xs: "0%" }, width: { lg: "165%", md: "235%", sm: "90%", xs: "143%" }, paddingRight: { lg: "0%", md: "0%", sm: "0%", xs: "20%" }, }}
            />
          </Grid>


          <Grid>
            <Grid mt="4%" mb="4%" sx={{ backgroundColor: "white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginTop: { lg: "5%", md: "1.5%", sm: "0%", xs: "0%" }, marginLeft: { lg: "10%", md: "30%", sm: "5%", xs: "0%" }, marginRight: { lg: "0%", md: "0%", sm: "5%", xs: "0%" }, width: {} }}>
              <Grid p="10%" pr="0%">
                <Typography fontSize="200%" pb="5%">
                  Dr. Travor James
                </Typography>
                <Typography pb="5%" color="#787878" pr="10%">
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.
                </Typography>
                <Typography pb="5%" color="#787878" pr="10%">
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.
                </Typography>
                <Typography pt="5%">
                  <img src={Check} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>


        </Grid>
      </Grid>
    </div>
  )
}

export default Travor