import LoadingSpinner from './components/LoadingSpinner'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherLocale from './components/WeatherLocale'
import './styles/App.css'

function App() {
  return (
    <div className='main'>
        <LoadingSpinner />
        <header className='weather_header'>
          <div className='weather_header_logo'>
            <span className='weather_header_logo_title'>
              W <span>F</span>
            </span>
          </div>
          <SearchBar />
        </header>

        <div>
          <WeatherLocale />
          <WeatherCard />
        </div>
    </div>
  )
}

export default App
