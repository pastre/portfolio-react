import React from "react"
import NavbarButton from './button/NavbarButton';
import NavbarItem from './item/NavbarItem';

import logo from './githubWhite.svg';
import "./Navbar.css"

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      <NavbarItem image = {logo} />
      <NavbarItem image = {logo} />
      <NavbarItem image = {logo} />
    </div>
    <div className="navbar--link">
      <div className="navbar--link-item"><NavbarButton name="Home" /></div>
      <div className="navbar--link-item"><NavbarButton name="Work" /></div>
      <div className="navbar--link-item"><NavbarButton name="Portfolio" /></div>
      <div className="navbar--link-item lastItem"><NavbarButton name="Reach out" /></div>
    </div>
  </nav>
)
export default Navbar