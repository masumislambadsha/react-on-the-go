import React, { useState } from 'react';
import'./country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {

    const [visited, setVisited] = useState(false)
    const handleVisit =() =>{
      // console.log(handleVisitedCountries)
      // if(visited){
      //   setVisited(false)
      // }
      // else{

      //   setVisited(true)
      // }
      // setVisited(visited? false: true)
      setVisited(!visited);
      handleVisitedCountries(country)
    }
  // console.log(country)
  return (
    // <div className={`country ${visited? 'country-visited':'country-not-visited'}`}>
    <div className={`country ${visited &&'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
        <h3>Name: {country.name.common}</h3>
        <p>Population: {country.population.population}</p>
        <p>It's in <b> {country.continents.continents} </b> Continent</p>
       <p>Area : {country.area.area} {country.area.area > 300000? 'Big Country' :'Small Country'}</p>
       <button onClick={handleVisit}>
        {visited? 'Visited':'Not Visited'}
       </button>
       <button onClick={() =>handleVisitedFlag(country.flags.flags.png)}>Add Visited Flag</button>
    </div>
  );
};

export default Country;
