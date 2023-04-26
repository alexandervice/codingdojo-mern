import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Search = () => {
  const [searchType, setSearchType] = useState("people");
  const [searchId, setSearchId] = useState(1);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/${searchType}/${searchId}`)
  }
  return (
    <div>
      <form className='search' onSubmit={handleSearch}>
        <div className='searchSelect'>
          <label htmlFor="searchType"></label>
          <select name='searchType' onChange={(e) => setSearchType(e.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div className='searchId'>
          <label htmlFor="id">ID: </label>
          <input name='id' type="number" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
        </div>
        <input type='submit' value='Search'/>
      </form>
    </div>
  )
}

export default Search