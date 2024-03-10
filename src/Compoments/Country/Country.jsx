// import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, area, capital, continents, currencies, independent, languages
    } = country;
    return (
        <div className="country">
            <h3>Name: {name?.common} </h3>
            <h4>Capital: {capital} </h4>
            <img src={flags?.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p>Continents: {continents} </p>
            <p>Currencies: {currencies?.HKD?.name} </p>
            <p>Independent: {independent ? 'Yes' : 'No'} </p>
            <p>Languages: {languages?.eng} {languages?.zho}</p>

        </div>
    );
};

export default Country;