import React from 'react'
import { useLoaderData, useParams , NavLink } from 'react-router-dom'

function itemDetail() {
    const contDetail = useLoaderData()
    const itemName = useParams().one
    // console.log(contDetail)
    // console.log(itemName)
    const filterData = contDetail.filter((item) => item.name.common == itemName)
    console.log(filterData)

    if(filterData == undefined) return <div className='loaderdiv'><p className='loader'></p></div>

  return (
    <>
  <section className="bg-[#1f1b1b] min-h-screen flex items-center justify-center p-8">
  {filterData.map((item) => (
    <div
      key={item.name.official}
      className="bg-black bg-opacity-80 text-white rounded-lg shadow-lg p-8 max-w-4xl w-full"
    >
      {/* Flag Image */}
      <img
        src={item.flags.svg}
        alt={item.flags.alt}
        className="w-full h-60 object-cover rounded-md"
      />

      {/* Country Details */}
      <div className="mt-6 space-y-4">
        <h2 className="text-3xl font-bold text-center">{item.name.official}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <p>
            <span className="font-semibold">Native Names:</span>{" "}
            {Object.values(item.name.nativeName).map((n, index) => (
              <span key={index}>{n.common}{index !== Object.values(item.name.nativeName).length - 1 ? ", " : ""} </span>
            ))}
          </p>

          <p>
            <span className="font-semibold">Population:</span> {item.population.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold">Region:</span> {item.region}
          </p>

          <p>
            <span className="font-semibold">Sub Region:</span> {item.subregion || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Capital:</span> {item.capital || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Top Level Domain:</span> {item.tld?.[0] || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Currencies:</span>{" "}
            {Object.values(item.currencies).map((c, index) => (
              <span key={index}>{c.name}{index !== Object.values(item.currencies).length - 1 ? ", " : ""} </span>
            ))}
          </p>

          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {Object.values(item.languages).map((lang, index) => (
              <span key={index}>{lang}{index !== Object.values(item.languages).length - 1 ? ", " : ""} </span>
            ))}
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8 flex justify-center">
        <NavLink to="/country">
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105">
            Go Back
          </button>
        </NavLink>
      </div>
    </div>
  ))}
</section>

    </>
  )
}

export default itemDetail