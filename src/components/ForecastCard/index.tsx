import { useEffect, useState } from "react"
import useWeather from "../../hooks/useWeather"
import { ForecastPick } from "../../models/Weather"
import { validateDaysDate } from "../../utils/validations"
import MinDeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import MaxDeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const Forecast = () => {
    const [forecast, setForecast] = useState<ForecastPick>()
    const { forecastData } = useWeather()

    const handleForecastData = () => {
        if (forecastData) {

            let data: any = forecastData.forecast.forecastday.filter(item => {
                if (new Date(item.date) > new Date()) return item
            })

            setForecast({
                forecast: {
                    forecastday: data
                }
            })
        }
    }

    useEffect(() => {
       handleForecastData()
    }, [forecastData])

    return (
        <div className="forecast_container">
            {forecast?.forecast.forecastday.map(forecast => (
                <div key={forecast.date} className="forecast_container_item p">
                    <span className="forecast_container_date">{validateDaysDate(forecast.date)}</span>
                    <img loading='lazy' className="forecast_container_icon" src={forecast.day.condition.icon} alt="Teste" width={50} height={50} />
                    <div className="forecast_container_temperature">
                        <span className="mr">
                            {Math.floor(forecast.day.maxtemp_c)}%
                            <MaxDeviceThermostatIcon />
                        </span>
                        /
                        <span className="ml">
                            {Math.floor(forecast.day.mintemp_c)}%
                            <MinDeviceThermostatIcon />
                        </span>
                    </div>
                    <small className="forecast_container_condicao">{forecast.day.condition.text}</small>
                </div>
            ))}
        </div>
    )
}

export default Forecast