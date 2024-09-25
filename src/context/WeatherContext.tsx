import { createContext, useContext, useState } from "react";

interface WeatherProviderProps {
    children: React.ReactNode
}

export const WeatherContext = createContext({})


export const WeatherProvider = ({children}: WeatherProviderProps) => {
    const [location, setLocation] = useState("")

    return (
        <WeatherContext.Provider value={{ location, setLocation }}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherContext = useContext(WeatherContext)

