import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { fetchForecastData, fetchWeatherData } from "../service/weatherApi"

const useWeather = () => {
    const { location } = useContext(WeatherContext)
    const [weatherData, setWeatherData] = useState(null)
    const [forecastData, setForecastData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let defaultLocation = ""

        if (!location) {
            navigator.geolocation.getCurrentPosition(function(location) {
                defaultLocation = `${location.coords.latitude},${location.coords.longitude}`
    
                if (defaultLocation !== "") {
                    fetchWeatherData(defaultLocation)
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
                    
                }
            });
            
        }
        
        if (location) {
            fetchWeatherData(location)
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
        }
    }, [location])
    
    return {weatherData, forecastData, error}    
}

export default useWeather