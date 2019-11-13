import React, {useState, useEffect} from 'react'
import axios from 'axios'


const CountryData = ({ place }) => {

    const [ weatherData, setWeatherData ] = useState([])

    const APIKey = '8378709125ccf31e4a2cdf30e18163f9'
    const weatherURL = 'http://api.weatherstack.com/current?access_key=' + APIKey + '&query=' + place.capital


    const getWeatherData = () => {
        axios
            .get(weatherURL)
            .then(response => {
                setWeatherData(response.data)
            })
    }

    useEffect(getWeatherData, [])

    const Languages = ( {languages} ) => {
        return(languages.map(language => 
            <li key={language.name}>
                {language.name}
            </li>
            )

        )

    }
    

    const WeatherData = ( {weather} ) => {

        console.log('weatherData', weather)

        if (weather) {
            
            return(
                <div>
                    temperature: {weather.temperature} C feels like {weather.feelslike} C
                    <p>wind: {weather.wind_dir} at {weather.wind_speed} kph</p>

                </div>
                
            )
        } else return null
        
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
            <div>
                <b>
                    Weather in {place.capital}
                </b>
                <WeatherData weather={weatherData.current}>

                </WeatherData>
                
            </div>
        </div>      
    )
}

export default CountryData