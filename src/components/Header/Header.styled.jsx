import { NavLink } from "react-router-dom/dist";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
width: 100%;
padding: 20px 30px 20px 30px;
border-radius: 10px;
color: white;

box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
border: 1px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(8px);
-webkit-backdrop-filter: blur(8px);
display: flex;
align-items: center;

position: fixed;
top: 0;
z-index: 1000;
font-size: 24px;
font-weight: 600;

// text-shadow: 
`;


export const Nav = styled.nav`
display: flex;
flex-direction: row;
gap: 100px;
margin-left: auto;
`

export const NavItem = styled(NavLink)`
font-weight: 600;

 transition: 500ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &:hover,
  &:focus {
    transform: scale(1.1);
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }

  &.active {
    
    color: white;
`