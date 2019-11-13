import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryData from './components/CountryData'

const App = () => {
    const [ countries, setCountries] = useState([])
    const [ searchFilter, setSearchFilter] = useState('')

    const getCountryData = () => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }

    useEffect(getCountryData, [])


    const handleSearchFilter = (event) => {
        setSearchFilter(event.target.value)
    }

    const handleShowClick = ( {country} ) => {
        setSearchFilter(country.name)

        }

    const ShowButton = ( {country} ) => {

        return (
            <button onClick={() => handleShowClick({country})}>
                show
            </button>
        )
    }

    const Display = ({search, countryName}) => {

        
    
        const searchResults = countryName.filter(country => 
            country.name.toLowerCase().includes(search.toLowerCase()))

        
        if (search === ''){
            return <div></div>

        } else if (searchResults.length > 10){
            return ( <div>Too many matches, specify another filter</div>)
        
        } else if (searchResults.length === 1){
            return(searchResults.map(country =>
                <CountryData 
                    key={country.name}
                    place={country}>
                </CountryData>
            ))
        
        } else {
            return (searchResults.map(country =>
                <div key={country.name}>
                    {country.name}
                    <ShowButton
                        country={country}>
                    </ShowButton>
                </div>
            ))
    
        }
    
    }

    return(
        
        <div>
            <Filter
                filterValue={searchFilter}
                handleSearch={handleSearchFilter}
            />

            <Display
                key={countries.name}
                search={searchFilter}
                countryName={countries}
            />

        </div>
    )

}

export default App