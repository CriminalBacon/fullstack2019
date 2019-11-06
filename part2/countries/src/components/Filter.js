import React from 'react'

const Filter = ({ filterValue, handleSearch}) => {

    return(
        <div>
            find countries 
            <input 
                value={filterValue}
                onChange={handleSearch}
            />

        </div>
    )
}

export default Filter