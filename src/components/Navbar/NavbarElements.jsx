// import './App.css'
// import React from 'react';
// import { Link } from 'react-router-dom';


// function NavBar() {

//     return (


//     <nav>
//       <Link to="/aboutms">About</Link>
//     </nav>
//         /*<Nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//         </Nav> */
//     );
// }
    
// export default NavBar;

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`   // exporting built-in react navbar components
    background: #F5F5F5;
    height: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; */
`;
 
export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    border-left: 2px solid #000000;
    margin-right: -20px;
    margin-left: 15px;
    display: inline-block;
    float: right;
    padding: 0 15px;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;

export const NavLink1 = styled(Link)`
    color: #000000;
    display: flex;
    margin-right: -20px;
    margin-left: 15px;
    display: inline-block;
    float: right;
    padding: 0 15px;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #000000;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    margin-top: 0px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #ebe5e5;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #ebe5e5;
    }
`;