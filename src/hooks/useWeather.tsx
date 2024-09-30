import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { fetchForecastData, fetchWeatherData } from "../service/weatherApi"
import { ForecastPick } from "../models/Weather"

const useWeather = () => {
    const { location } = useContext(WeatherContext)
    const [weatherData, setWeatherData] = useState(null)
    const [userLocation, setUserLocation] = useState("")
    const [loading, setLoading] = useState<boolean>(false)
    const [forecastData, setForecastData] = useState<ForecastPick>()
    const [error, setError] = useState(null)

    const handleGetUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(user => {
                if (user) {
                    setUserLocation(`${user.coords.latitude},${user.coords.longitude}`)
                    setLoading(true)
                } 
            })
        }
    }

    useEffect(() => { 
                handleGetUserLocation()  
                if (loading || location) {
                    fetchWeatherData(location || userLocation)
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
    }, [location, loading])
    
    return {weatherData, forecastData, error}    
}

export default useWeather