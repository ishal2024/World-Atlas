import React from 'react'
import { NavLink } from 'react-router-dom'

function HeroSection() {
  return (
    <>
        <section className=" body-font bg-[#1f1b1b] text-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-6xl mb-4 font-medium text-white">
          Explore the World, One Country at a Time.
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <NavLink to='/country'>Start Exploring</NavLink>
            </button>
            
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 shadow-lg shadow-blue-500/50">
          <img className="object-cover object-center rounded-[10px] " alt="hero" 
          src="https://img.freepik.com/free-photo/beautiful-planets-space_23-2149288524.jpg?semt=ais_hybrid" />
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroSection