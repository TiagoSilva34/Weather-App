import Forecast from './components/ForecastCard'
import LoadingSpinner from './components/LoadingSpinner'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherLocale from './components/WeatherLocale'
import useWeather from './hooks/useWeather'
import './styles/App.css'

function App() {
  const data = useWeather()

  return (
    <div className='main p'>
        <header className='weather_header flex space-between align-center'>
          <div className='weather_header_logo'>
            <span className='weather_header_logo_title'>
              W <small className='relative'>F</small>
            </span>
          </div>
          <SearchBar />
        </header>

        <div>
          {!data.weatherData ? (
            <LoadingSpinner />
          ) : (
            <>
              <WeatherLocale />
              <WeatherCard />
            </>
          )}
        </div>
        {!data.forecastData ? (
            <LoadingSpinner />
        ) : (
          <Forecast />
        )}
    </div>
  )
}

export default App
