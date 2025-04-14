import React from 'react'
import { CountryFacts } from '../Api/CountryFacts'

function About() {
    return (
        <>
            <div className="w-full overflow-hidden">
                <div className='w-full text-4xl bg-[#1f1b1b] underline text-indigo-500 text-center py-6'>
                    Here are the Interesting Facts we're proud of
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center bg-[#1f1b1b] py-12 px-4">
                    {CountryFacts.map((item, index) => (
                        <div key={index} className="bg-black text-white p-6 rounded-xl shadow-xl w-full max-w-xs flex flex-col gap-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="font-bold text-3xl text-center text-indigo-400">{item.countryName}</div>
                            <div className="text-lg font-medium">Capital: <span className="text-gray-300">{item.capital}</span></div>
                            <div className="text-lg font-medium">Population: <span className="text-gray-300">{item.population}</span></div>
                            <div className="text-lg font-medium">Interesting Fact: <span className="text-gray-300">{item.interestingFact}</span></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About