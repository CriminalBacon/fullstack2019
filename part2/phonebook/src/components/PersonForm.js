import React from 'react'

const PersonForm = ( {nameInput, nameHandler, numberInput, numberHandler, add} ) => {

    return (
        <form onSubmit={add}>
        <div>
          name: 
            <input
                value={nameInput}
                onChange={nameHandler} 
            />
        </div>
        <div>
          number:
            <input
                value={numberInput}
                onChange={numberHandler}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        </form>
    )
} 

export default PersonForm