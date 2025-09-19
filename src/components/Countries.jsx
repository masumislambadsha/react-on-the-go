import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

  const [visitedCountries, setVisitedCountries] =useState([])
  const [visitedFlag, setVisitedFlag] =useState([])

  const handleVisitedCountries = (country) =>{
    const newVisitedCountries =[...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlag = (flag) =>{
    console.log('flag need to be added', flag)
    const newVisitedFlags = [...visitedFlag, flag]
    setVisitedFlag(newVisitedFlags)
  }


  const countriesData = use(countriesPromise)
  const countries = countriesData.countries
  // console.log(countriesData)
  // console.log(countries)
  return (
    <div>
      <h1>In the countries {countries.length}</h1>
      <h2>Total countries visited: {visitedCountries.length}</h2>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3.cca3}> {country.name.common}</li>)
        }
      </ol>
      <h3>Total Visited Flags: {visitedFlag.length}</h3>
      <div className='country'>
        {
          visitedFlag.map(flag => <img width='120px' src={flag}></img>)
        }
      </div>
      <div className='countries'>
         {
        countries.map(country => <Country key={country.cca3.cca3} handleVisitedFlag={handleVisitedFlag} country={country}
          handleVisitedCountries={handleVisitedCountries}
        ></Country>)
      }
      </div>

    </div>
  );
};

export default Countries;
