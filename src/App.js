import "./App.css";
// import Home from "./page/Home";
import Checkout from "../src/pages/Checkout";
import { Box, Grid } from "@mui/material";
function App() {
	return (
		<div style={{ display: "flex" }}>
			<Grid container>
				<Grid item lg={2.5} md={3} sm={0} xs={0}></Grid>
				<Grid item lg={9.5} md={9} sm={12} xs={12}>
					<Checkout />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
