import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import links from "../../links/Links";
export default function BasicLayout() {
  return (
    <div>
      <Navbar links={links} />
      <Outlet />
    </div>
  );
}
