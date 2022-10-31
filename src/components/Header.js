import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
const NavBar = styled.nav`
  background-color: black;
  display: flex;
  padding: 0 3rem;
  align-items: center;
`;
const Logo = styled.img`
  width: 3rem;
`;
const LinksBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin-left: auto;
  align-items: center;
`;
const Links = styled.p`
  font-weight: 700;
  letter-spacing: 0.06rem;
`;
const Header = () => {
  return (
    <NavBar>
      {/* img */}
      <Logo src={logo} />
      {/* Links */}
      <LinksBox>
        <NavLink activeClassName="nav-active-link" to="all-quotes">
          <Links>All Quotes</Links>
        </NavLink>
        <NavLink activeClassName="nav-active-link" to="add-new-quote">
          <Links>Add New Quote</Links>
        </NavLink>
        <NavLink activeClassName="nav-active-link" to="online-quotes">
          <Links>Online Quotes</Links>
        </NavLink>
      </LinksBox>
    </NavBar>
  );
};

export default Header;
