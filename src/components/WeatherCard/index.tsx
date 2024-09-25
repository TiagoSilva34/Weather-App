import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';

const WeatherCard = () => {
    return (
        <div className="weather_card_container column items-center">
           <section className='weather_card_details'>
                <header className='font-regular'>
                    Informações sobre o clima
                </header>

                <main className='weather_card_details_content p'>
                    <h1 className='font-medium'>Dia ensolarado</h1>

                    <div className='weather_card_details_info_container'>
                        <div className='weather_card_details_feels_like_container flex space-between mb mt'>
                            <span className='weather_card_details_feels_like_info'>Sensação</span>

                            <div className='flex items-center'>
                                <span className='weather_card_details_value mr'>21%</span>
                                <span className='weather_card_details_icon'>
                                    <DeviceThermostatIcon />
                                </span>
                            </div>
                        </div>

                        <div className='weather_card_details_humidity_container flex space-between mb mt'>
                            <span className='weather_card_details_humidity_info'>Humidade</span>
                            <div className='flex items-center'>
                                <span className='weather_card_details_value mr'>85%</span>
                                <span className='weather_card_details_icon'>
                                    <WaterDropIcon />
                                </span>
                            </div>
                        </div>

                        <div className='weather_card_details_wind_container flex space-between mb mt'>
                            <span className='weather_card_details_wind_info'>Vento</span>

                            <div className='flex items-center'>
                                <span className='weather_card_details_value mr'>4.95 KpH</span>
                                <span className='weather_card_details_icon'>
                                    <AirIcon />
                                </span>
                            </div>
                        </div>

                        <div className='weather_card_details_clouds_container flex space-between mb mt'>
                            <span className='weather_card_details_cloud_info'>Nuvens</span>
                            <div className='flex items-center'>
                                <span className='weather_card_details_value mr'>18%</span>
                                <span className='weather_card_details_icon'>
                                    <CloudIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
           </section>
        </div>
    )
}

export default WeatherCard