import React from 'react'

const Search = ({value,setValue}) => {
    return (
        <div className='searchbar-container'>
            <span><b>Select Display Currency</b></span>
            <input
                type="text"
                placeholder='Search Currencies...'
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
        </div>
    )
}

export default Search