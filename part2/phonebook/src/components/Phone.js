import React from 'react'

const Phone = ({ person }) => {
    return(
        <li>
            {person.name} {person.number}
        </li>
    )
}

export default Phone