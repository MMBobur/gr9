import {
	Autocomplete,
	Box,
	Button,
	Checkbox,
	Grid,
	Input,
	InputBase,
	TextareaAutosize,
	TextField,
	Typography,
} from "@mui/material";
import Checkboxe from "./Checkbox";
import CardTotal from "../../components/CardTotal";
import React from "react";
const sty = {
	width: "100%",
	bgcolor: "#F5F7FA",
	color: "black",
	py: "3.9%",
	// px: "7.5%",
	px: "30px",
	border: "2px solid #fff",
	fontWeight: "600",
	":active": {
		border: "2px solid #7AADFA",
	},
};
const style = {
	width: "100%",
	bgcolor: "#F5F7FA",
	color: "black",
	py: "2.5%",
	px: "30px",
	fontWeight: "600",
	border: "2px solid #fff",
	":active": {
		border: "2px solid #7AADFA",
	},
};
const options = [
	"United States",
	"United Kingdom",
	"Germany",
	"France",
	"India",
	"Austalia",
	"Brazil",
	"Canada",
];
export default () => {
	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ px: "15px" }}>
					<Typography
						sx={{
							fontSize: "170%",
							mb: "2.2%",
							mt: "13.5%",
							fontWeight: "550",
						}}
					>
						{" "}
						Checkout
					</Typography>
				</Box>
				<Grid container spacing={0} sx={{ mb: "5%", pr: "2%" }}>
					<Grid item xs={12} sm={12} md={8} lg={7.7}>
						<Box sx={{ px: "15px" }}>
							<Box sx={{ width: "100%" }}>
								<Grid container spacing={3}>
									<Grid item lg={6} md={6} sm={12} xs={12}>
										<InputBase
											sx={sty}
											placeholder="First Name"
											inputProps={{ "aria-label": "search google maps" }}
										/>
									</Grid>
									<Grid item lg={6} md={6} sm={12} xs={12}>
										<InputBase
											sx={sty}
											placeholder="Last Name"
											inputProps={{ "aria-label": "search google maps" }}
										/>
									</Grid>
									<Grid
										item
										lg={12}
										md={12}
										sm={12}
										xs={12}
										sx={{ display: "flex", gap: 1.5, flexDirection: "column" }}
									>
										<InputBase
											sx={style}
											placeholder="Company Name"
											inputProps={{ "aria-label": "search google maps" }}
										/>
										<InputBase
											sx={style}
											placeholder="Email"
											inputProps={{ "aria-label": "search google maps" }}
										/>

										<Autocomplete
											disablePortal
											id="combo-box-demo"
											options={options}
											sx={{
												px: "3.5%",
												py: "1.2%",
												width: "93%",
												bgcolor: "#F5F7FA",
												color: "black",
											}}
											renderInput={(params) => (
												// <TextField {...params} label="Movie" />
												<TextField
													sx={{
														bgcolor: "#F5F7FA",
														color: "black",

														fontWeight: "600",

														border: "none",
													}}
													{...params}
													label="United States"
													variant="standard"
												/>
											)}
										/>
										<InputBase
											sx={style}
											placeholder="Address"
											inputProps={{ "aria-label": "search google maps" }}
										/>
										<InputBase
											sx={style}
											placeholder="Town"
											inputProps={{ "aria-label": "search google maps" }}
										/>
									</Grid>
									<Grid item lg={6} md={6} sm={12} xs={12}>
										<InputBase
											sx={sty}
											placeholder="Zip Code "
											inputProps={{ "aria-label": "search google maps" }}
										/>
									</Grid>
									<Grid item lg={6} md={6} sm={12} xs={12}>
										<InputBase
											sx={sty}
											placeholder="Phone No"
											type="number"
											inputProps={{ "aria-label": "search google maps" }}
										/>
									</Grid>
									<Grid
										item
										lg={12}
										md={12}
										sm={12}
										xs={12}
										sx={{
											display: "flex",
											gap: 2,
											flexDirection: "column",
											px: "2px",
											mb: "5%",
										}}
									>
										<TextareaAutosize
											placeholder="Leave a comment about your order"
											style={{
												fontFamily: "revert-layer",
												fontSize: "100%",
												// width: "100vw",
												height: "25vh",
												background: "#F5F7FA",
												color: "black",

												padding: "30px",
												fontWeight: "600",
												border: "2px solid #fff",

												":active": {
													border: "2px solid blue",
												},
												borderStyle: "none",
											}}
										/>
										<Box sx={{ width: "100%", ml: "-1%", p: 0 }}>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<Checkboxe />
												<Typography>Create an accout</Typography>
											</Box>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<Checkboxe />
												<Typography>Ship to a different address</Typography>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={4} lg={3.8} sx={{ px: "15px" }}>
						<CardTotal />
					</Grid>
					<Grid item xs={0} sm={0} md={0} lg={0.5} sx={{}}></Grid>
				</Grid>
			</Box>
		</>
	);
};
