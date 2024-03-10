// import React from 'react';
import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length} </h3>
        </div>
    );
};

export default Countries;