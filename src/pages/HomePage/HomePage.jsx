import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import { HomePageWrapper } from "./HomePage.styled";

const HomePage = () => {
    return (
        <HomePageWrapper>
        <MainTitle title='Car rental in Ukraine - we are always with you'
        style={{ whiteSpace: 'normal' }}/>
        </HomePageWrapper>
    )
}

export default HomePage;