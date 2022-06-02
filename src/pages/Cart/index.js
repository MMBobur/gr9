import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '../../components/Card'

const cardData = [
  {
    img: 'https://preview.colorlib.com/theme/amado/img/bg-img/xcart1.jpg.pagespeed.ic.84UQLYLKqh.webp',
    name: 'White Modern Chair',
    price: '$130',
    quantity: 'Qty -1 +'
  },
  {
    img: 'https://preview.colorlib.com/theme/amado/img/bg-img/xcart2.jpg.pagespeed.ic.gftAef9kj-.webp',
    name: 'White Modern Chair',
    price: '$120',
    quantity: 'Qty -1 +'
  },
  {
    img: 'https://preview.colorlib.com/theme/amado/img/bg-img/xcart3.jpg.pagespeed.ic.mu8Jv14z61.webp',
    name: 'Minimal Plant Pot',
    price: '$100',
    quantity: 'Qty -1 +'
  }
]

export default () => {

  return (
    <Grid container>
      <Card sx={{ border: 2 }} cardData={cardData} />
    </Grid>
  )
}

