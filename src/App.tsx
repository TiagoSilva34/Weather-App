import LoadingSpinner from './components/LoadingSpinner'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherLocale from './components/WeatherLocale'

function App() {
  return (
    <div className='main'>
        <LoadingSpinner />
        <SearchBar />

        <div>
          <WeatherLocale />
          <WeatherCard />
        </div>
    </div>
  )
}

export default App
