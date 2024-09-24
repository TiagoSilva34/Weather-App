import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';

const WeatherCard = () => {
    return (
        <div className="weather_card_container">
           <section className='weather_card_details'>
                <header>
                    Informações sobre o clime
                </header>

                <main className='weather_card_details_content'>
                    <h1>Dia ensolarado</h1>

                    <div className='weather_card_details_feels_like_container'>
                        <span className='weather_card_details_feels_like_info'></span>

                        <div className='weather_card_details_value_and_icon_container'>
                            <span className='weather_card_details_value'>19%</span>
                            <span className='weather_card_details_icon'>
                                <DeviceThermostatIcon />
                            </span>
                        </div>

                        <div className='weather_card_details_humidity_container'>
                            <span className='weather_card_details_value'>19%</span>
                            <span className='weather_card_details_icon'>
                                <WaterDropIcon />
                            </span>
                        </div>

                        <div className='weather_card_details_wind_container'>
                            <span className='weather_card_details_value'>19%</span>
                            <span className='weather_card_details_icon'>
                                <AirIcon />
                            </span>
                        </div>

                        <div className='weather_card_details_clouds_container'>
                            <span className='weather_card_details_value'>5km/h</span>
                            <span className='weather_card_details_icon'>
                                <CloudIcon />
                            </span>
                        </div>
                    </div>
                </main>
           </section>
        </div>
    )
}

export default WeatherCard