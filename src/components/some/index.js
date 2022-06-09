import { Grid, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'
import CountUp from "react-countup"

function Some() {
  return (
    <div>
      <Grid mt="5%">
        <Grid className='for-bg'>

          <Grid className='for-opacity' textAlign="center">
            <Grid pt="7%">
              <Grid sx={{ color: "white", fontSize: "270%", opacity: "1", fontWeight: 'bold' }}>
                Some Features that Made us Unique
              </Grid>
              <Grid sx={{ color: "white", fontSize: "100", opacity: "1" }} p="1%" pb="0.5%">
                Who are in extremely love with eco friendly system.
              </Grid>
            </Grid>




            {/*           CountUp              */}



            <Grid container mt="3%" justifyContent="center" sx={{ marginTop: { lg: "3%", md: "8%", sm: "", xs: "10%" }, display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" } }}>
              <Grid sm={5} lg={2.3} md={2.6} sx={{ backgroundColor: "white", borderRadius: "5%", margin: { lg: "2%", md: "1%", sm: "1%", xs: "1%" }, boxShadow: "0px 10px 50px 0px rgb(245 63 81 / 30%)", width: { lg: "20%", sm: "21%", md: "100%", xs: "95%" } }} p="2%" textAlign="center">
                <CountUp
                  end={2536}
                  duration={2}
                  style={{
                    color: "#F53F51",
                    fontSize: "400%",
                    paddingTop: "20%",
                    paddingBottom: "10%"
                  }}
                />
                <Typography color="black" pt="5%" pb="5%">
                  Happy Clients
                </Typography>
              </Grid>


              <Grid sm={5} lg={2.3} md={2.6} sx={{ backgroundColor: "white", borderRadius: "5%", margin: { lg: "2%", md: "1%", sm: "1%", xs: "1%" }, boxShadow: "0px 10px 50px 0px rgb(245 63 81 / 30%)", width: { lg: "20%", sm: "21%", md: "100%", xs: "95%" } }} p="2%" textAlign="center">
                <CountUp
                  end={6784}
                  duration={2}
                  style={{
                    color: "#F53F51",
                    fontSize: "400%",
                    paddingTop: "20%",
                    paddingBottom: "10%"
                  }}
                />
                <Typography color="black" pt="5%" pb="5%">
                  Total Projects
                </Typography>
              </Grid>


              <Grid sm={5} lg={2.3} md={2.6} sx={{ backgroundColor: "white", borderRadius: "5%", margin: { lg: "2%", md: "1%", sm: "1%", xs: "1%" }, boxShadow: "0px 10px 50px 0px rgb(245 63 81 / 30%)", width: { lg: "20%", sm: "21%", md: "100%", xs: "95%" } }} p="2%" textAlign="center">
                <CountUp
                  end={1059}
                  duration={2}
                  style={{
                    color: "#F53F51",
                    fontSize: "400%",
                    paddingTop: "20%",
                    paddingBottom: "10%"
                  }}
                />
                <Typography color="black" pt="5%" pb="5%">
                  Cups Coffee
                </Typography>
              </Grid>


              <Grid sm={5} lg={2.3} md={2.6} sx={{ backgroundColor: "white", borderRadius: "5%", margin: { lg: "1.5%", md: "1%", sm: "1%", xs: "1%" }, boxShadow: "0px 10px 50px 0px rgb(245 63 81 / 30%)", width: { lg: "20%", sm: "21%", md: "100%", xs: "95%" } }} p="2%" textAlign="center">
                <CountUp
                  end={12239}
                  duration={2}
                  style={{
                    color: "#F53F51",
                    fontSize: "400%",
                    paddingTop: "20%",
                    paddingBottom: "10%"
                  }}
                />
                <Typography color="black" pt="5%" pb="5%">
                  Tickets Submitted
                </Typography>
              </Grid>
            </Grid>





          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Some