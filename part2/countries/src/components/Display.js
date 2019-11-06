import React from 'react'
import CountryData from './CountryData'

const Display = ({search, countryName}) => {
    
    const query = country => country.name.toLowerCase().includes(search.toLowerCase())
    const searchResults = countryName.filter(query)

    return (searchResults.map(country =>
        <CountryData
            key = {country.name}
            place = {country}
        />
    ))
}

export default Display