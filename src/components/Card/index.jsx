import React from "react";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Fade,
} from '@mui/material';

// import TwoCard from './TwoCard'
import { Grid } from "@mui/material";

export default ({ cardData }) => {

    // console.log(cardData);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ width: "100%" }}>
                    <TableHead >
                        <TableRow sx={{ background: "#f5f7fa", marginTop: '20px' }}>
                            <TableCell></TableCell>
                            <TableCell sx={{ color: '#242424', fontSize: '15px', }}>Name</TableCell>
                            <TableCell sx={{ color: '#242424', fontSize: '15px', }}>Price</TableCell>
                            <TableCell sx={{ color: '#242424', fontSize: '15px', }}>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <br />
                    <TableBody>
                        {cardData.map((row, idx) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell ><img style={{ width: { lg: '25%', md: '50%', xs: '100%' }, height: '28%' }} src={row.img} alt='' /> </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: { lg: '18px', xs: '13px' } }}>{row.name}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: { lg: '18px', xs: '17px' } }}>{row.price}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: { lg: '18px', xs: '13px' } }}><Box sx={{ background: "#f5f7fa", height: '40px', width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{row.quantity}</Box></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};