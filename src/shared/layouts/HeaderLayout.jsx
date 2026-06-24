import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/features/landingPage/components/Header";

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderLayout;
