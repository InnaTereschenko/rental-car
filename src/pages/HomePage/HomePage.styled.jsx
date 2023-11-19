import styled from "styled-components";
import homeImg from '../../assets/homeImg.jpg';


export const HomePageWrapper = styled.div`
whidth: 100%;
height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
color: darkblue;
  background-image: url(${homeImg});
  background-position: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`