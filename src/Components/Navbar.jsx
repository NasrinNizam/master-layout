import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <nav className=" flex justify-between items-center bg-[#379777] p-4">
        <div className="logo">
            <h1 className="text-3xl text-white ">Layout One</h1>
        </div>
        <ul className="flex gap-6 text-white text-xl">
            <li className="hover:scale-125 transition-all"><Link to='/'>Home</Link></li>
            <li className="hover:scale-125 transition-all"><Link to='/about'>About</Link></li>
            <li className="hover:scale-125 transition-all"><Link to='/blog'>Blogs</Link></li>
            <li className="hover:scale-125 transition-all"><Link to='layoutTwo'>Layout Two</Link></li>
        </ul>
    </nav>
    </>
  )
}
