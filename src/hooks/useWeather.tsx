import { useEffect, useState } from "react"

const useWeather = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
    }, [loading])
    
    return {weatherData, loading, error}    
}