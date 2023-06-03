import { useState } from 'react';
import Card from '../components/Card'
import RegionButton from '../components/RegionButton';
import dataWorld from '../data/data.json'
export default function Home() {
  const [regionName, setRegionName] = useState('')
  const [countryName, setCountryName] = useState('')
  // Display array of country
  const filterWorld = dataWorld.filter((country) => {
      if(regionName === ''){
        return true
      }
      if(countryName=== '' && country.region.toLowerCase() === regionName.toLowerCase()){
        return true
      }
        return countryName.toLowerCase() && country.name.toLowerCase().includes(countryName.toLowerCase())
    })


  return (
   <>
      <section className="h-10 flex justify-between my-5">
        <input className='h-8 w-6/12 px-3 py-2 rounded-full border-2 border-custom-blue-03' type="text" onChange={(e) => {setCountryName(e.target.value)}} placeholder='Search for a country ...'/>
        <div className='group'>
          <div className='flex justify-between w-24'>
            <span className=' font-bold'>Filter</span>
            <span className=' font-light text-sm'></span>{filterWorld.length}
          </div> 
          <div className='Region hidden group-hover:flex flex-col relative border border rounded-b-lg'>
            <RegionButton region={'All'} onClick={() => {setRegionName('')}} />
            <RegionButton region={'Africa'} onClick={() => {setRegionName('Africa')}}/>
            <RegionButton region={'America'} onClick={() => {setRegionName('Americas')}}/>
            <RegionButton region={'Asia'} onClick={() => {setRegionName('Asia')}}/>
            <RegionButton region={'Europe'} onClick={() => {setRegionName('Europe')}}/>
            <RegionButton region={'Oceania'} onClick={() => {setRegionName('Oceania')}}/>
          </div>
        </div>
      </section>
      <section className='my-5 grid grid-cols-4 gap-5'>
      {
        filterWorld.map((country) => {
          const countryID = country.alpha3Code;
          return(
            <Card data={country} key={countryID} />
          )
          })
      }
      </section>
   </>
  )
}

/*
dataWorld
        .filter((data) => { return data.region === regionName })
        .map((country) => {
          const countryID = country.alpha3Code;
          return(
            <Card data={country} key={countryID} />
          )
          })
        .find((result) => { return (<Card data={result} />) } )
        

*/