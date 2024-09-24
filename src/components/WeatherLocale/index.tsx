import WbSunnyIcon from '@mui/icons-material/WbSunny';

const WeatherLocale = () => {
    return (
        <div className="weather_locale_container">
           <section className='weather_locale_temperature_session flex items-center justify-center'>
                <span className='weather_locale_temperature pr font-regular'>21º</span>
                <div className='weather_locale_locale_name column'>
                    <span className="weather_locale_city_name relative font-regular">São Paulo</span>
                    <span className="weather_locale_date font-regular">14:09 - Terça, 24 Set 2024</span> 
                </div>
                <span className="weather_locale_icon">
                    <WbSunnyIcon />
                </span>
           </section>
        </div>
    )
}

export default WeatherLocale