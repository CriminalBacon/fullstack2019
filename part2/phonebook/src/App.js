import React, { useState } from 'react'
import Phone from './components/Phone'


const App = (props) => {
  const [ persons, setPersons] = useState(props.persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchFilter, setSearchFilter ] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchFilter = (event) => {
    setSearchFilter(event.target.value)
  }

  const rows = () => {
    const search = person => person.name.toLowerCase().includes(searchFilter.toLowerCase())
    const searchResults = persons.filter(search)
    return (searchResults.map(person =>
        <Phone
            key = {person.name}
            person = {person}
        />
      ))}


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
        setPersons(persons.concat(phoneObject))
      }

      setNewName('')
      setNewNumber('')
    
    }
 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          filter shown with
            <input
              value={searchFilter}
              onChange={handleSearchFilter}
            />
        </div>
        <div>
          <h2>add a new</h2>
        </div>
        <div>
          name: 
            <input
                value={newName}
                onChange={handleNameChange} 
            />
        </div>
        <div>
          number:
            <input
                value={newNumber}
                onChange={handleNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {rows()}
    </div>
  )
}

export default App