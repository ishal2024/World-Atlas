import React, { useCallback, useEffect, useState } from 'react'
import FetchApi from '../Api/Fetch'
import { NavLink, useLoaderData } from 'react-router-dom'


function Country() {
  const [searchInput , setSearhInput] = useState("")
  const [option,setOption] = useState('')
  const [data, setData] = useState(null)
  
  const apiData = useLoaderData()
  console.log('Country re-render ' , apiData)
  
  const SearchData = apiData.filter((item) => {
      return item.name.common.toLowerCase().includes(searchInput.toLowerCase()) 
    })

    let optionData = SearchData.filter((item) => {
      return option != '' && option != 'all' ? item.region.toLowerCase().includes(option.toLowerCase()) : SearchData
    })
    
    useEffect(() => {
      setData([...optionData])
    },[searchInput,option])
    
function ascending (){
 const sortedArray = data.sort((a,b) => a.name.common.localeCompare(b.name.common))
 console.log('s.a' , sortedArray)
 setData([...sortedArray])

}




  function desending(){
    const sortedArray = optionData.sort((a,b) => b.name.common.localeCompare(a.name.common))
    setData([...sortedArray])
  }

  if(data == null) return <div className='loaderdiv'><p className='loader'></p></div>
 
  return (
   <>
   <div className='xl:w-[98.9vw] w-[100vw] bg-[#1f1b1b] items-center flex flex-col md:flex-row flex-wrap md:gap-0 gap-4 text-white justify-around py-10 box-border overflow-x-hidden'>
   <div className=' text-white md:w-[20%] w-[80%] '>
    <input 
    className='w-[100%] px-2 border-2 border-white text-white rounded-[8px] bg-black md:bg-[#1f1b1b]  py-1.5' 
    placeholder='Enter Country name'  type="search" name="" id="" value={searchInput} onChange={(e) => setSearhInput(e.target.value)}  />
   </div>
   <button className=' border-2 border-white rounded-[8px]  hover:bg-red-500 py-1.5 px-16 md:px-5 bg-red-600 focus:bg-green-600' onClick={ascending}>A to Z</button>
   <button className='border-2 border-white rounded-[8px] hover:bg-red-500 py-1.5 px-16 md:px-5 bg-red-600 focus:bg-green-600' onClick={desending}>Z to A</button>
   <select className='border-2 border-white rounded-[8px] py-1.5 px-14 md:px-5 bg-black' name="" id="" value={option} onChange={(e) => setOption(e.target.value)}>
   <option value="all">All</option>
    <option value="africa">Africa</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="antarctic">Antarctic</option>
    <option value="oceania">Oceania</option>
   </select>
   </div> 
   
    
   <div className="bg-[#1f1b1b] min-h-screen p-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {data?.length > 0 ? (
      data.map((item) => (
        <div
          key={item.id}
          className="bg-black text-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
        >
          <div className="w-full">
            <img
              src={item.flags?.svg || "default-flag.png"}
              alt={item.flags?.alt || "Flag"}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-4 space-y-2">
              <p className="text-xl font-bold">{item.name?.common}</p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {item.population?.toLocaleString() || "Unknown"}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {item.region || "Unknown"}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {item.capital?.[0] || "N/A"}
              </p>
              <NavLink to={`/country/${item.name?.common}`}>
                <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg">
                  Read More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-white text-center col-span-full">Loading...</p>
    )}
  </div>


   </div>
   </>
  )
}

export default Country