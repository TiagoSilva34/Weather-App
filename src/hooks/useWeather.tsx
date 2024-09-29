import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { fetchForecastData, fetchWeatherData } from "../service/weatherApi"

let defaultLocation = "-23.520856837459185,-46.57482654740279"

const useWeather = () => {
    const { location } = useContext(WeatherContext)
    const [weatherData, setWeatherData] = useState(null)
    const [forecastData, setForecastData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {    
            fetchWeatherData(location || defaultLocation)
                .then(response => {
                    if (response) {
                        setWeatherData(response)
                        fetchForecastData(response.location.name)
                        .then(forecast => {
                            if (forecast) setForecastData(forecast)
                        })
                        .catch(error => {
                            setError(error)
                        })
                    }
                })
                .catch(error => {
                    setError(error)
                })
    }, [location])
    
    return {weatherData, forecastData, error}    
}

export default useWeather