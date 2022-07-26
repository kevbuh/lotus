import NavBar from "../components/NavBar";
import React from "react";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;
