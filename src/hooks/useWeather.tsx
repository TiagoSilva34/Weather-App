import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { fetchWeatherData } from "../service/weatherApi"

const useWeather = () => {
    const { location } = useContext(WeatherContext)
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let defaultLocation = ""

        if (!location) {
            navigator.geolocation.getCurrentPosition(function(location) {
                defaultLocation = `${location.coords.latitude},${location.coords.longitude}`
    
                fetchWeatherData(defaultLocation)
                .then(response => {
                    if (response) setWeatherData(response)
                })
                .catch(error => {
                    setError(error)
                })
            });
            
        } else {
            fetchWeatherData(location)
                .then(response => {
                    if (response) setWeatherData(response)
                })
                .catch(error => {
                    setError(error)
                })
        }
    }, [location])
    
    return {weatherData, error}    
}

export default useWeather