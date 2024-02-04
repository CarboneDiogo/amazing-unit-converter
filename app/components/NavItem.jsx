import Link from 'next/link'
import React from 'react'

const NavItem = (props) => {
    const navItem = props.navItem
    const isActive = props.activeItem
    
  return (
    <div className="hover:cursor-pointer hover:text-black hover:bg-white duration-500 p-2">
        <Link className={isActive ? 'text-green-500' : ''} href={navItem.toLowerCase()}>{navItem}</Link>
    </div>
  )
}

export default NavItem