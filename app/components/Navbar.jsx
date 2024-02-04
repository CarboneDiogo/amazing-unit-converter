import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between ">
<div className="hover:cursor-pointer hover:text-black hover:bg-white duration-500 p-2">
  <p>Home</p>
</div>
<div className="flex flex-row space-x-6">
    <NavItem navItem="Weight" />
    <NavItem navItem="Distance" />
    <NavItem navItem="Temperature" />
</div>
</nav>
  )
}


export default Navbar