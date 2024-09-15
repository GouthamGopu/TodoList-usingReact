import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiArrowSmRight } from "react-icons/hi";

const Home = () => {
  return (
    <div>
      <div className="container bg-violet-200 my-5 mx-auto p-6  rounded-2xl w-[40vw] flex flex-col gap-6 place-content-center items-center">
        <p className='font-bold'>Hello!! Welcome to Todo App using React</p>
        <div className="w-full flex  place-content-center items-center">
        <NavLink className='font-bold underline flex items-center' to="/todos">Your Todo's <HiArrowSmRight /></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
