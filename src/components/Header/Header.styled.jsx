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

text-shadow: 
`;


export const Nav = styled.ul`
display: flex;
flex-direction: row;
gap: 100px;
margin-left: auto;
`

export const NavItem = styled.li`

`