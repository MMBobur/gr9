import React from "react";
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
import Checkboxe from "../../pages/Checkout/Checkbox";
import rasm from "../../pages/Checkout/img/download.webp";
export default () => {
	return (
		<>
			<Box
				sx={{
					position: "relative",
					bgcolor: "#F5F7FA",
					color: "black",
					py: "30px",
					px: "23px",
				}}
			>
				<Typography sx={{ fontSize: "110%", fontWeight: "550" }}>
					Cart Total
				</Typography>
				<Box
					sx={{
						my: "7%",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: 4,
					}}
				>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Subtotal:</Typography>
						<Typography>$140.00</Typography>
					</Box>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Delivery:</Typography>
						<Typography>Free</Typography>
					</Box>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Total:</Typography>
						<Typography>$140.00</Typography>
					</Box>
				</Box>
				<Box sx={{ position: "relative", left: "-10px" }}>
					<Box
						sx={{
							width: "100%",

							display: "flex",
							alignItems: "center",
						}}
					>
						<Checkboxe />
						<Typography>Cash on Delivery</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<Checkboxe />
						<Typography>Paypal</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								mx: "5%",
							}}
						>
							<img src={rasm} alt="" />{" "}
						</Box>
					</Box>
				</Box>
				<Button
					sx={{
						width: "100%",
						fontWeight: "bold",
						display: "flex",
						justifyContent: "center",
						bgcolor: "#FBB710",
						borderRadius: 0,
						color: "white",
						py: "5%",
						mt: "35%",
					}}
					variant="text"
				>
					Checkout
				</Button>
			</Box>
		</>
	);
};
