import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

  const [visitedCountries, setVisitedCountries] =useState([])
  const countriesData = use(countriesPromise)
  const countries = countriesData.countries
  // console.log(countriesData)
  // console.log(countries)
  return (
    <div>
      <h1>In the countries {countries.length}</h1>
      <h2>Total countries visited: </h2>
      <div className='countries'>
         {
        countries.map(country => <Country key={country.cca3.cca3} country={country}

        ></Country>)
      }
      </div>

    </div>
  );
};

export default Countries;
