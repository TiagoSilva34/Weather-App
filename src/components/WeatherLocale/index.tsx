import WbSunnyIcon from '@mui/icons-material/WbSunny';

const WeatherLocale = () => {
    return (
        <div className="weather_locale_container">
           <section className='weather_locale_temperature_session'>
                <span className='weather_locale_temperature'>16º</span>
                <div className='weather_locale_locale_name'>
                    <span className="weather_locale_city_name">São Paulo</span>
                    <span className="weather_locale_date">14:09 - Terça, 24 Set 2024</span>
                    <span className="weather_locale_icon">
                        <WbSunnyIcon />
                    </span>
                </div>
           </section>
        </div>
    )
}

export default WeatherLocale