// import React from 'react';
import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country)
    const {name, flags, population, area, capital, continents, independent, languages , cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = (e) => {
        setVisited(!visited);
        if (visited) {
            const visitedCountry = e.target;
            visitedCountry.className = "visited-country";
        } else {
            const goingCountry = e.target;
            goingCountry.className = "going-country";
        }
    }
    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && "visited"}`}>
            <h3>Name: {name?.common} </h3>
            <h4>Capital: {capital} </h4>
            <img src={flags?.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p>Continents: {continents} </p>
            <p>Independent: {independent ? 'Yes' : 'No'} </p>
            <p><small>Code: {cca3} </small></p>
            <p>Languages: {languages?.eng ? languages?.eng : "Unknown"}</p>
            <br />
            <br />
            <button onClick={()=>{
                handleVisitedCountry(country)
            }}>Mark as visited</button>
            <br />
            <br />
            <button className={visited ? "visited-country" : "going-country"} onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            <br />
            <br />
            {visited ? "I have visited this country" : "I want to visit this country"}
        </div>
    );
};

export default Country;