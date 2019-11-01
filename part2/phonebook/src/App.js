import React, { useState } from 'react'
import Phone from './components/Phone'


const App = (props) => {
  const [ persons, setPersons] = useState(props.persons)
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const rows = () => persons.map(person =>
        <Phone
            key = {person.name}
            person = {person}
        />
      )


  const addPhone = (event) =>{
    event.preventDefault()
    
    const phoneObject = {
      name: newName,
      id: newName
      }

      if (persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook.`);
      } else {
        setPersons(persons.concat(phoneObject))
      }

      setNewName('')
    
    }
 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: 
            <input
                value={newName}
                onChange={handleNameChange} 
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