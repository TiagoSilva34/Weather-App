import Forecast from './components/ForecastCard'
import LoadingSpinner from './components/LoadingSpinner'
import Recharts from './components/Recharts'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherLocale from './components/WeatherLocale'
import useWeather from './hooks/useWeather'
import './styles/App.css'

function App() {
  const data = useWeather()

  return (
    <>
        {!data.weatherData && !data.forecastData ? (
            <LoadingSpinner />
        ) : (
          <div className='app'>
                <header className='weather_header flex space-between align-center'>
                  <div className='weather_header_logo'>
                    <span className='weather_header_logo_title'>
                      W <small className='relative'>F</small>
                    </span>
                  </div>
                  <SearchBar />
                </header>

                <div className='main'>
                      <div>
                        <WeatherLocale />
                        <WeatherCard />
                      </div>
                      <div>
                        <Forecast />
                        <Recharts />
                      </div>
                </div>
            </div>
        )}
    </>
  )
}

export default App
