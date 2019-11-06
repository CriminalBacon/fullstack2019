import React from 'react'
import Phone from './Phone'

const Persons = ({search, people}) => {

    const query = person => person.name.toLowerCase().includes(search.toLowerCase())
    const searchResults = people.filter(query)
    return (searchResults.map(person =>
        <Phone
            key = {person.name}
            person = {person}
        />
    ))
}

export default Persons