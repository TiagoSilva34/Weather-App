import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

const SearchBar = () => {
    const [cityName, setCityName] = useState("")
    const { setLocation } = useContext(WeatherContext)

    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault()
        setLocation(cityName)
    }

    return (
        <div className="search_bar_container" onSubmit={handleSubmit}>
            <form className="search_bar_form flex items-center b-bottom">
                <input type="text" value={cityName} className="search_bar_locale font-regular" placeholder='Digite a localidade' onChange={(event) => setCityName(event.target.value)}/>
                <button type='submit' className="search_bar_search" aria-label="search city">
                    <SearchIcon className='search_bar_icon_Search' />
                </button>
            </form>
        </div>
    )
}

export default SearchBar