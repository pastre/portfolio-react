import React from "react"
import NavbarButton from './button/NavbarButton';
import NavbarItem from './item/NavbarItem';

import GithubIcon from './githubWhite.svg';
import LinkedinWhite from './linkedin.svg';
import MediumIcon from './mediumWhite.svg';

import "./Navbar.css"

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      <NavbarItem image = {GithubIcon} alt = "Github Logo" url = "https://github.com/pastre" />
      <NavbarItem image = {LinkedinWhite} alt = "Linkedin Logo" url = "https://www.linkedin.com/in/bpastre/" />
      <NavbarItem image = {MediumIcon} alt = "Medium Logo" url = "https://medium.com/@pastre68" />
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