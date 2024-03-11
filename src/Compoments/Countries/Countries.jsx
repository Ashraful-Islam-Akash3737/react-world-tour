// import React from 'react';
import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = (country) => {

        const newVisitedCountry= [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);


        // const markAsVisitedContainer = document.getElementById('Mark-as-visited');
        // const li = document.createElement('li');
        // li.innerHTML=`${country.name.common}`;
        // markAsVisitedContainer.appendChild(li);
    }
    return (
        <div>
            <h3>Countries: {countries.length} </h3>

            <div>
                <h3>Visited countries are: {visitedCountries.length} </h3>
                <ol id='Mark-as-visited'>
                    {
                        visitedCountries.map((country)=><li key={country.cca3}>{country.name.common}</li>)
                    }

                </ol>
            </div>

            <div className="countries">
                {
                    countries.map((country) => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;