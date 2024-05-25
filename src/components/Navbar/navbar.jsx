import React from "react";
import {
    Nav,
    NavLink,
    NavLink1,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

// actual creation of the Navbar text and such using the components from NavbarElements.jsx
const Navbar = () => {  
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink1 to="/home" >
                        Home
                    </NavLink1>
                    <NavLink to="/aboutms" >
                        About MS
                    </NavLink>
                    <NavLink to="/aboutmsss" activeStyle>
                        About MSSS
                    </NavLink>
                    <NavLink to="/msssmembers" activeStyle>
                        MSSS Members
                    </NavLink>
                    <NavLink to="/mscares" activeStyle>
                        MS Care Support Group
                    </NavLink>
                    <NavLink to="/media" activeStyle>
                        News & Media
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/* <NavBtn> */}
                    {/* <NavBtnLink to="/signin"> */}
                        {/* Sign In */}
                    {/* </NavBtnLink> */}
                {/* </NavBtn> */ }
            </Nav>
        </>
    );
};

export default Navbar;