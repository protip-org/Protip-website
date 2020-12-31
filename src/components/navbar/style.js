import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 20px;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: 4px;
`;

export const NavbarA = styled(NavLink)`
    font-size: 18px;
    color: #ffff;
    text-decoration: none;
    :hover {
        color: #ffe6ac;
        transition: all 0.3s ease 0.1s;
    }
`;

export const NavbarLi = styled.li`
    display: inline-block;
    padding: 10px 30px;
    transition: all 0.3s ease 0.1s;
`;

export const NavbarLogo = styled.img`
    position: relative;
    right: 250px;
    cursor: pointer;
    width: 80px;
    height: 80px;
    :hover {
        transition: transform 0.4s;
        transform: scale(1.1);
    }
`;