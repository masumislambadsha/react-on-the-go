import React, { useState } from 'react';
import'./country.css'

const Country = ({country}) => {

    const [visited, setVisited] = useState(false)

    const handleVisit =() =>{
      // if(visited){
      //   setVisited(false)
      // }
      // else{

      //   setVisited(true)
      // }
      // setVisited(visited? false: true)
      setVisited(!visited)
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
    </div>
  );
};

export default Country;
