import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import axios from 'axios'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchFilter, setSearchFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })

  }, [])


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchFilter = (event) => {
    setSearchFilter(event.target.value)
  }

  const addPhone = (event) =>{
    event.preventDefault()
    
    const phoneObject = {
      name: newName,
      id: newName,
      number: newNumber
      }

          
          if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook.`);
          } else {
            axios
            .post(('http://localhost:3001/persons', phoneObject))
            .then (response => 
              setPersons(persons.concat(response.data))
              )
            
          }
    
          setNewName('')
          setNewNumber('')

    }

    
 

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter 
        filterValue={searchFilter} 
        handleSearch={handleSearchFilter} 
      />

      <div>
        <h2>add a new</h2>
      </div>
      
      <PersonForm 
        nameInput={newName} 
        nameHandler={handleNameChange}
        numberInput={newNumber}
        numberHandler={handleNumberChange}
        add={addPhone}
      />

      <h2>Numbers</h2>
        <Persons search={searchFilter} people={persons} />
    </div>
  )
}

export default App