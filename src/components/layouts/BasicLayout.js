import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import links from "../../links/Links";
import Footer from ".././navigation/Footer/Footer";

export default function BasicLayout() {
	return (
		<div>
			<Navbar links={links} />
			<Outlet />
			<Footer />
		</div>
	);
}
