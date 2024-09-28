import { BASE_URL } from "./configApi";

const key = import.meta.env.VITE_API_KEY

export const fetchWeatherData = async(locale: string) => {
    try {
        const { data } = await BASE_URL.get(`/current.json?key=${key}&q=${locale}&aqi=no&lang=pt`)
        
        return data
    } catch (error: any) {
        console.error(error.message)
        return null
    }
}

export const fetchForecastData = async(locale: string) => {
    try {
        const { data } = await BASE_URL.get(`forecast.json?key=${key}&q=${locale}&days=7&aqi=no&alerts=no&lang=pt`)

        return data
    } catch (error: any) {
        console.error(error.message)
        return null
    }
}