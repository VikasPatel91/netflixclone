import React from 'react';
import './SearchBar.css'
const SearchBar = () => {
    return (
        <div className='search'>
            <form action="">
            <input type="text" id='search-input' placeholder='search'/>
            <input type="button" id='search-btn' value="Search" />
            </form>
        </div>
    );
}

export default SearchBar;
