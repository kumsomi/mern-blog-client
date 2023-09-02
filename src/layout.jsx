import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const Layout = () => {
  return (
    <main className="blog-page">
      <Navbar />
      <Outlet />
    </main>
  );
};
