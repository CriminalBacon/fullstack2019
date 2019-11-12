import React from 'react'

const CountryData = ({ place }) => {

    const Languages = ( {languages} ) => {
        return(languages.map(language => 
            <li key={language.name}>
                {language.name}
            </li>
            )

        )

    }

    return(
        <div>
            <h2>{place.name}</h2>
            <div>
                capital {place.capital}
                <br></br>
                population {place.population}
            </div>
            <div>
                <br></br>
                <b>Languages</b>
                <ul>
                    <Languages languages={place.languages} />
                </ul>
            </div>
            <div>
                <img src={place.flag} alt={"Flag of " + place.name} width="125" height="150" />
            </div>
        </div>      
    )
}

export default CountryData