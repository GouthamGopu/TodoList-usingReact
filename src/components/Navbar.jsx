import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 bg-violet-800 text-white h-[7vh] m-0 py-4'>
      <div className="logo cursor-pointer">
      <NavLink to="/"><span className="text-lg font-bold">Todo App</span></NavLink>
      </div>
      <ul className='flex gap-6 text-violet-200'>
        <li className='cursor-pointer hover:font-bold transition-all hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white font-bold":""}} to="/">Home</NavLink> </li>
        <li className='cursor-pointer hover:font-bold transition-all hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white font-bold":""}} to="/todos">Your Todos</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
