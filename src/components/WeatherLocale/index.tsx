// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useEffect, useState } from 'react';
import { Weather } from '../../models/Weather';
import useWeather from '../../hooks/useWeather';

const WeatherLocale = () => {
    const [weatherData, setWeatherData] = useState<Weather>()
    const data = useWeather()

    useEffect(() => {       
        if (data.weatherData !== null) {
            setWeatherData(data.weatherData)
        }
    }, [data])
    
    return (
        <div className="weather_locale_container">
           <section className='weather_locale_temperature_session flex items-center justify-center'>
                <span className='weather_locale_temperature pr font-regular'>{Math.floor(weatherData?.current.temp_c || 0)}º</span>
                <div className='weather_locale_locale_name column'>
                    <span className="weather_locale_city_name relative font-regular">{weatherData?.location.region}</span>
                    <span className="weather_locale_date font-regular">{weatherData?.location.localtime}</span> 
                </div>
                <span className="weather_locale_icon">
                    <img src={weatherData?.current.condition.icon} alt="ìcone de clime" className='' />
                    {/* <WbSunnyIcon /> */}
                </span>
           </section>
        </div>
    )
}

export default WeatherLocale