import React from "react";
import { NavbarDiv, NavbarA, NavbarLi, NavbarLogo } from "./style"

const Navbar = () => (
    <NavbarDiv id="home">
         <NavbarLogo src="https://cdn.discordapp.com/icons/793222963402899456/70357f424c5d71e32cfd9e82d676b299.png?size=128" />
        <ul>
            <NavbarLi>
                <NavbarA  
                    to="/"
                    exact
                    activeStyle={{
                        color: "#ffe6ac"
                    }}>
                    Home
                 </NavbarA>
            </NavbarLi>
            <NavbarLi>
                <NavbarA  
                   to="/commands"
                   activeStyle={{
                    color: "#ffe6ac"
                }}>
                    Commands
                 </NavbarA>
            </NavbarLi>
            <NavbarLi>
                <NavbarA  
                   to="/contact"
                   activeStyle={{
                    color: "#ffe6ac"
                }}>
                    Contact
                 </NavbarA>
            </NavbarLi>
        </ul>
    </NavbarDiv>
);

export default Navbar;