import { useEffect, useState } from "react"
import useWeather from "../../hooks/useWeather"
import { Weather } from "../../models/Weather"
import { validateDaysDate } from "../../utils/validations"

const Forecast = () => {
    const [forecastData, setForecastData] = useState<Weather>()
    const data = useWeather()

    useEffect(() => {
        if (data.forecastData !== null) {
            setForecastData(data.forecastData)
        }
    }, [data])

    return (
        <div className="forecast_container">
            {forecastData?.forecast.forecastday.map(forecast => (
                <div key={forecast.date} className="forecast_container_item p">
                    <span className="forecast_container_date">{validateDaysDate(forecast.date)}</span>
                    <img className="forecast_container_icon" src={forecast.day.condition.icon} alt="Teste" />
                    <div className="forecast_container_temperature">
                        <span className="mr">{Math.floor(forecast.day.maxtemp_c)}%</span>
                        /
                        <span className="ml">{Math.floor(forecast.day.mintemp_c)}%</span>
                    </div>
                    <small className="forecast_container_condicao">{forecast.day.condition.text}</small>
                </div>
            ))}
        </div>
    )
}

export default Forecast