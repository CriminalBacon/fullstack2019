import React from 'react'

const Filter = ( {filterValue, handleSearch} ) => {

    return(
        <div>
        filter shown with
          <input
            type="text"
            value={filterValue}
            onChange={handleSearch}
          />
        </div>
    )
}

export default Filter