import { BASE_URL } from "./configApi";

export const fetchWeatherData = async(locale: string) => {
    try {
        const { data } = await BASE_URL.get(`/current.json?key=693665a4e54c4be3973160204242409&q=${locale}&aqi=no`)
        return data
    } catch (error: any) {
        console.error(error.message)
        return null
    }
}

export const fetchForecastData = () => {
    
}