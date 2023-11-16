import styled from "styled-components";
import homeImg from '../../assets/homeImg.jpg';

export const MainContainer = styled.div`
  background-color: #28fb5652;
  padding: 0 128px 0 128px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: Manrope;
  font-size: 20px;
  background-image: url(${homeImg});
  background-position: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`;

export const Main = styled.main``;
