// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useEffect, useState } from 'react';
import { Weather } from '../../models/Weather';
import useWeather from '../../hooks/useWeather';
import { validateDateAndTime } from '../../utils/validations';

const WeatherLocale = () => {
    const [weather, setWeather] = useState<Weather>()
    const {weatherData} = useWeather()

    useEffect(() => {       
        if (weatherData) {
            setWeather(weatherData)
        }
    }, [weatherData])
    
    return (
        <div className="weather_locale_container">
           <section className='weather_locale_temperature_session flex items-center justify-center'>
                <span className='weather_locale_temperature pr font-regular'>{Math.floor(weather?.current.temp_c || 0)}º</span>
                <div className='weather_locale_locale_name column'>
                    <span className="weather_locale_city_name relative font-regular">{weather?.location.region}</span>
                    <span className="weather_locale_date font-regular">{validateDateAndTime(weather?.location.localtime || "")}</span> 
                </div>
                <span className="weather_locale_icon">
                    <img loading='lazy' src={weather?.current.condition.icon} alt="ìcone de clime" height={50} width={50} />
                </span>
           </section>
        </div>
    )
}

export default WeatherLocale