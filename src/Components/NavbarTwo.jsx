import React from 'react'
import { Link } from 'react-router-dom'
export const NavbarTwo = () => {
  return (
    <>
    <nav className=" flex justify-between items-center bg-[#FF6969] p-4">
        <div className="logo">
            <h1 className="text-3xl text-white ">Layout Two</h1>
        </div>
        <ul className="flex gap-6 text-white text-xl">
            <li className="hover:scale-125 transition-all"><Link to='/'>Home</Link></li>
            <li className="hover:scale-125 transition-all"><Link to='/layoutTwo'>Services</Link></li>
            <li className="hover:scale-125 transition-all"><Link to='/layoutTwo/help'>Help</Link></li>
            <li className="hover:scale-125 transition-all"><Link to='/layoutThree'>Layout Three</Link></li>
        </ul>
    </nav>

    </>
  )
}
