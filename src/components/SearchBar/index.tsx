import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

const SearchBar = () => {
    const {location, setLocation} = useContext(WeatherContext)

    return (
        <div className="search_bar_container">
            <form className="search_bar_form flex items-center b-bottom">
                <input type="text" value={location} className="search_bar_locale font-regular" placeholder='Digite a localidade' onChange={(event) => setLocation(event.target.value)}/>
                <button className="search_bar_search">
                    <SearchIcon className='search_bar_icon_Search' />
                </button>
            </form>
        </div>
    )
}

export default SearchBar