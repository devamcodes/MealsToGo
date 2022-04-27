import React from "react";
import "./Footer.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = ({ links }) => {
	return (
		<>
			<Typography variant="body2" color="text.secondary" align="center">
				{"Copyright © "}
				<Link color="inherit" to="/">
					Your Website
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
			<Box>
				<ul>
					{links.map((obj) => {
						return (
							<>
								<Box sx={{ display: "inline", justifyContent: "space-between" }}>
									<Typography sx={{ display: "flex", flexDirection: "column" }}>
										{obj.link}
										{/* <Box
											sx={{
												display: "flex",
												textAlign: "center",
												flexDirection: "column",
											}}> */}
										{obj.children?.map((i) => (
											<Link to={i.urlExt}>{i.link}</Link>
										))}
										{/* </Box> */}
									</Typography>
								</Box>
							</>
						);
					})}
				</ul>
			</Box>
		</>
	);
};

export default Footer;
