import React from 'react'
import { NavbarThree } from '../Components/NavbarThree'
import { Outlet } from 'react-router-dom'

export const LayoutThree = () => {
  return (
    <div>
        <NavbarThree/>
        <Outlet/>
    </div>
  )
}
