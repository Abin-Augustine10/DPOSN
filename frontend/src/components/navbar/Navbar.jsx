import React from 'react'
import NavbarLinks from './NavbarLinks'
import UserLinks from './UserLinks'

function Navbar() {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full  md:px-44 px-5 py-2">
      <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-400">
          DPOSN
        </span>
      </div>

      <div className="hidden md:flex justify-center item-center ">
        <NavbarLinks />
      </div>
      <div className="hidden md:flex justify-center item-center ">
        <UserLinks />
      </div>
    </div>
  )
}

export default Navbar