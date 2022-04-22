import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./navigation/Footer/Footer";

const BasicLayout = () => {
	return (
		<div>
			<Outlet />
			<Footer />
		</div>
	);
};

export default BasicLayout;
