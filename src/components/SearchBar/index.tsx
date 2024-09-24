import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className="search_bar_container">
            <form className="search_bar_form">
                <input type="text" className="search_bar_locale" placeholder='Digite a localidade' />
                <button className="search_bar_search">
                    <SearchIcon className='search_bar_icon_Search' />
                </button>
            </form>
        </div>
    )
}

export default SearchBar