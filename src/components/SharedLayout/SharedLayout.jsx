import { Outlet } from "react-router";
import { Suspense } from "react";
import { Main, MainContainer } from "./SharedLayout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <MainContainer>
      <Header />
      <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        
      </Main>
      <Footer />
      </MainContainer>
    </>
  );
};

export default SharedLayout;
