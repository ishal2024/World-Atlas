import React from 'react'
import { CountryFacts } from '../Api/CountryFacts'
import HeroSection from './HeroSection'
import About from './About'

function Home() {
    console.log(CountryFacts)
    return (
        <>
           <div className='bg-[#1f1b1b]'>
          <HeroSection />
           <About />
            </div>
        </>
    )
}

export default Home