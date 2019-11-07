import React from 'react'
import CountryData from './CountryData'

const Display = ({search, countryName}) => {
    
    const query = country => country.name.toLowerCase().includes(search.toLowerCase())
    const searchResults = countryName.filter(query)

    if (searchResults.length > 10){
        return ( <div>Too many matchs, specify another filter</div>)
    
    } else if (searchResults.length === 1){
        return(searchResults.map(country =>
            <CountryData
                key = {country.name}
                place= {country}
            />
        ))
    
    } else {
        return (searchResults.map(country =>
            <div>
                <b>{country.name}</b>
            </div>
        ))

    }



}

export default Display