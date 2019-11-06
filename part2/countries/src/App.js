import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Display from './components/Display'
import Filter from './components/Filter'

const App = () => {
    const [ countries, setCountries] = useState([])
    const [ searchFilter, setSearchFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })


    })

    const handleSearchFilter = (event) => {
        setSearchFilter(event.target.value)
    }



    return(
        <div>
            <Filter 
                filterValue={searchFilter}
                handleSearch={handleSearchFilter}
            />

            <Display
                search={searchFilter}
                countryName={countries}
            />


        </div>
    )




}

export default App