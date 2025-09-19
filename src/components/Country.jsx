import React from 'react';
import'./country.css'

const Country = ({country}) => {

    const handleVisit =() =>{
      
    }
  // console.log(country)
  return (
    <div className='country'>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
        <h3>Name: {country.name.common}</h3>
        <p>Population: {country.population.population}</p>
        <p>It's in <b> {country.continents.continents} </b> Continent</p>
       <p>Area : {country.area.area} {country.area.area > 300000? 'Big Country' :'Small Country'}</p>
       <button onClick={handleVisit}>Not Visited</button>
    </div>
  );
};

export default Country;
