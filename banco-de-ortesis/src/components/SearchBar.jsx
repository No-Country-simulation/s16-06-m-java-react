// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
      <form onSubmit={handleSubmit} className="flex justify-evenly items-center w-84 gap-2 rounded-3xl bg-white text-blueSecond border border-solid border-blueSecond">
        <input   className="
        border-none 
        outline-none 
        focus:outline-none 
        active:outline-none 
        focus:ring-0 
        active:ring-0 
        bg-transparent
        placeholder-blueSecond
      "
          type="text"
          placeholder="Buscador"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button className='text-midnight border-none bg-transparent' type="submit">Buscar</button> */}
        <IoMdSearch className='w-6 h-6' />
      </form>
  );
};

export default SearchBar;
