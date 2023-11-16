import { Outlet } from "react-router";
import { Suspense } from "react";
import { Main } from "./SharedLayout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}></Suspense>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default SharedLayout;
