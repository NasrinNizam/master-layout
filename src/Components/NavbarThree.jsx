import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarThree = () => {
  return (
    <div>
        <nav className=" flex justify-between items-center bg-[#0C1844] p-4">
        <div className="logo">
            <h1 className="text-3xl text-white ">Layout Three</h1>
        </div>
        <ul className="flex gap-6 text-white text-xl">
            <li className="hover:scale-125 transition-all"><Link to='/'>Home</Link></li>
            <li className="hover:scale-125 transition-all"><Link to='/layoutThree'>Contacts</Link></li>
            <li className="hover:scale-125 transition-all"><Link to='/layoutThree/review'>Reviews</Link></li>
        </ul>
    </nav>
    </div>
  )
}
